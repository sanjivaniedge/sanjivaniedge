import nodemailer from "nodemailer";
import { Redis } from "@upstash/redis";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const name = (data?.name || "").toString().trim();
    const organization = (data?.organization || "").toString().trim();
    const email = (data?.email || "").toString().trim();
    const phone = (data?.phone || "").toString().trim();
    const message = (data?.message || "").toString().trim();

    const consent = Boolean(data?.consent);

    // 1. Basic Validation
    if (!name || !email || !message || !consent) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), { status: 400 });
    }

    // 2. Rate Limiting (Upstash)
    const ipHeader = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const ip = ipHeader.split(",")[0].trim();
    const rateLimitKey = `contact_limit:${ip}`;
    const emailLimitKey = `contact_email:${email}`;

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

    // 4. Email Content Construction (Plain Text + HTML for better deliverability)
    const subject = `New contact form submission — ${name}`;
    
    const textContent = `
Name: ${name}
Organization: ${organization}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `.trim();

    const htmlContent = `
      <div style="font-family:Inter,system-ui,Segoe UI,Arial,sans-serif;font-size:14px;color:#1A1F3D">
        <h2 style="margin:0 0 12px">Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr style="background-color:#f9f9f9"><td style="padding:8px;border-bottom:1px solid #eee"><strong>Name</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Organization</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(organization)}</td></tr>
          <tr style="background-color:#f9f9f9"><td style="padding:8px;border-bottom:1px solid #eee"><strong>Email</strong></td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${escapeHtml(email)}" style="color:#0175B2">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Phone</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(phone)}</td></tr>

        </table>
        <div style="margin-top:20px;padding:16px;border:1px solid #eee;border-radius:8px;background:#fafafa">
          <div style="margin-bottom:8px;color:#606060;font-size:12px;text-transform:uppercase;letter-spacing:0.5px">Message</div>
          <div style="white-space:pre-wrap;line-height:1.5">${escapeHtml(message)}</div>
        </div>
        <div style="margin-top:20px;font-size:12px;color:#999">
          This email was sent from the contact form on sanjivaniedge.com
        </div>
      </div>
    `;

    // 5. Send Mail
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`, // "Name" <email@domain.com> format helps avoid spam
      to,
      subject,
      text: textContent, // Plain text version is crucial for spam filters
      html: htmlContent,
      replyTo: email, // Allows you to hit "Reply" and email the user directly
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Contact API Error:", err);
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
