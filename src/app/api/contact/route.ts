import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const name = (data?.name || "").toString().trim();
    const organization = (data?.organization || "").toString().trim();
    const email = (data?.email || "").toString().trim();
    const phone = (data?.phone || "").toString().trim();
    const message = (data?.message || "").toString().trim();
    const consent = Boolean(data?.consent);

    if (!name || !email || !message || !consent) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), { status: 400 });
    }

    const host = process.env.BREVO_SMTP_HOST || "smtp-relay.brevo.com";
    const port = Number(process.env.BREVO_SMTP_PORT || 587);
    const user = process.env.BREVO_SMTP_USER;
    const pass = process.env.BREVO_SMTP_PASSWORD;
    const to = process.env.CONTACT_TO_EMAIL || "contact@sanjivaniedge.com";
    const from = process.env.CONTACT_FROM_EMAIL || "contact@sanjivaniedge.com";

    if (!user || !pass) {
      return new Response(JSON.stringify({ ok: false, error: "SMTP not configured" }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `New contact form submission — ${name}`;
    const html = `
      <div style="font-family:Inter,system-ui,Segoe UI,Arial,sans-serif;font-size:14px;color:#1A1F3D">
        <h2 style="margin:0 0 12px">Contact Form Submission</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 8px">Name</td><td style="padding:4px 8px"><strong>${escapeHtml(name)}</strong></td></tr>
          <tr><td style="padding:4px 8px">Organization</td><td style="padding:4px 8px">${escapeHtml(organization)}</td></tr>
          <tr><td style="padding:4px 8px">Email</td><td style="padding:4px 8px">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:4px 8px">Phone</td><td style="padding:4px 8px">${escapeHtml(phone)}</td></tr>
        </table>
        <div style="margin-top:12px;padding:12px;border:1px solid #eee;border-radius:8px;background:#fafafa">
          <div style="margin-bottom:6px;color:#606060">Message</div>
          <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from,
      to,
      subject,
      html,
      replyTo: email,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
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

