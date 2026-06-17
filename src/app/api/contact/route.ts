import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  // Validation (mirrors the client, but never trust the client).
  if (!name || !email || !subject || !message) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (message.length > 5000) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "Mohammed@t4id.com";
  // Must be a verified domain in Resend. `onboarding@resend.dev` works for
  // testing but only delivers to the Resend account owner's address.
  const from = process.env.CONTACT_FROM_EMAIL || "Horizons Website <onboarding@resend.dev>";

  if (!apiKey) {
    // Surface a clear, non-leaky error so the form shows the error state
    // instead of pretending to succeed.
    console.error("RESEND_API_KEY is not set; cannot send contact email.");
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Subject: ${subject}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>New inquiry from the Horizons website</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New inquiry: ${subject}`,
      text,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return Response.json({ error: "Failed to send message." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return Response.json({ error: "Failed to send message." }, { status: 502 });
  }
}
