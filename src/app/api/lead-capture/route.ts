import nodemailer from "nodemailer";
import { Redis } from "@upstash/redis";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const propertyType = (data?.propertyType || "").toString().trim();
    const name = (data?.name || "").toString().trim();
    const phone = (data?.phone || "").toString().trim();
    const email = (data?.email || "").toString().trim();
    const city = (data?.city || "").toString().trim();
    const state = (data?.state || "").toString().trim();
    const purchaseTimeline = (data?.purchaseTimeline || "").toString().trim();

    // 1. Basic Validation
    if (!name || !email || !phone) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), { status: 400 });
    }

    // 2. Rate Limiting (Upstash)
    try {
      const ipHeader = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
      const ip = ipHeader.split(",")[0].trim();
      const rateLimitKey = `lead_limit:${ip}`;
      const emailLimitKey = `lead_email:${email}`;

      if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
        const redis = new Redis({
          url: process.env.UPSTASH_REDIS_REST_URL,
          token: process.env.UPSTASH_REDIS_REST_TOKEN,
        });
        const exists = await redis.get(rateLimitKey);
        if (exists) {
          return new Response(JSON.stringify({ ok: false, error: "Too many attempts. Please wait a minute." }), { status: 429 });
        }
        await redis.set(rateLimitKey, "1", { ex: 60 });
        const emailExists = await redis.get(emailLimitKey);
        if (emailExists) {
          return new Response(JSON.stringify({ ok: false, error: "Duplicate submission detected. Try later." }), { status: 429 });
        }
        await redis.set(emailLimitKey, "1", { ex: 600 });
      }
    } catch (error) {
      console.warn("Rate limiting skipped due to Redis error:", error);
    }

    // 3. SMTP Configuration
    const host = process.env.BREVO_SMTP_HOST || "smtp-relay.brevo.com";
    const port = Number(process.env.BREVO_SMTP_PORT || 587);
    const user = process.env.BREVO_SMTP_USER;
    const pass = process.env.BREVO_SMTP_PASSWORD;
    
    const to = process.env.CONTACT_TO_EMAIL || "contact@sanjivaniedge.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "contact@sanjivaniedge.com";
    const fromName = "Sanjivani Edge Website";

    if (!user || !pass) {
      return new Response(JSON.stringify({ ok: false, error: "SMTP not configured" }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    // 4. Email Content Construction
    const subject = `New Property Lead — ${name}`;
    
    const textContent = `
Property Type: ${propertyType}
Name: ${name}
Phone: ${phone}
Email: ${email}
City: ${city}
State: ${state}
Purchase Timeline: ${purchaseTimeline}
    `.trim();

    const htmlContent = `
      <div style="font-family:Inter,system-ui,Segoe UI,Arial,sans-serif;font-size:14px;color:#1A1F3D">
        <h2 style="margin:0 0 12px">Property Lead Capture</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr style="background-color:#f9f9f9"><td style="padding:8px;border-bottom:1px solid #eee"><strong>Property Type</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(propertyType)}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Name</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(name)}</td></tr>
          <tr style="background-color:#f9f9f9"><td style="padding:8px;border-bottom:1px solid #eee"><strong>Phone</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Email</strong></td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${escapeHtml(email)}" style="color:#0175B2">${escapeHtml(email)}</a></td></tr>
          <tr style="background-color:#f9f9f9"><td style="padding:8px;border-bottom:1px solid #eee"><strong>City</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(city)}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>State</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(state)}</td></tr>
          <tr style="background-color:#f9f9f9"><td style="padding:8px;border-bottom:1px solid #eee"><strong>Purchase Timeline</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(purchaseTimeline)}</td></tr>
        </table>
        <div style="margin-top:20px;font-size:12px;color:#999">
          This email was sent from the lead capture form on sanjivaniedge.com
        </div>
      </div>
    `;

    // 5. Send Mail
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to,
      subject,
      text: textContent,
      html: htmlContent,
      replyTo: email,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Lead Capture API Error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Unexpected error" }), { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
