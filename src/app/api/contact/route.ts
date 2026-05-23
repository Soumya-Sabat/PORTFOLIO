import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: ContactPayload) {
  const name = clean(payload.name);
  const email = clean(payload.email).toLowerCase();
  const projectType = clean(payload.projectType);
  const message = clean(payload.message);

  if (name.length < 2) {
    return { error: "Please enter your name." };
  }

  if (!emailPattern.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (message.length < 20) {
    return { error: "Please include at least 20 characters in your message." };
  }

  if (message.length > 4000) {
    return { error: "Please keep your message under 4000 characters." };
  }

  return { data: { name, email, projectType, message } };
}

async function sendWithResend({
  name,
  email,
  projectType,
  message,
}: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return { mode: "preview" as const };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Portfolio inquiry: ${projectType || "New project"}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Email provider failed: ${details}`);
  }

  return { mode: "sent" as const };
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const result = validate(payload);

  if ("error" in result) {
    return NextResponse.json({ message: result.error }, { status: 400 });
  }

  try {
    const delivery = await sendWithResend(result.data);

    return NextResponse.json({
      message:
        delivery.mode === "sent"
          ? "Message sent. I will reply soon."
          : "Message received in local preview mode. Add RESEND_API_KEY and CONTACT_TO_EMAIL to send real email.",
      deliveryMode: delivery.mode,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "The email service could not send this message right now." },
      { status: 502 },
    );
  }
}
