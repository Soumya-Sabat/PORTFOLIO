import { profile } from "@/data/portfolio";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getContactPayload(payload: ContactPayload) {
  const name = clean(payload.name);
  const email = clean(payload.email).toLowerCase();
  const message = clean(payload.message);

  if (name.length < 2) {
    return { error: "Please enter your name." };
  }

  if (!emailPattern.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (message.length < 10) {
    return { error: "Please include at least 10 characters in your message." };
  }

  return { data: { name, email, message } };
}

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing ${name}.`);
  }

  return value;
}

async function sendMail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const smtpHost = getRequiredEnv("SMTP_HOST");
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = getRequiredEnv("SMTP_USER");
  const smtpPass = getRequiredEnv("SMTP_PASS");
  const fromEmail =
    process.env.SMTP_FROM_EMAIL?.trim() ?? `Portfolio <${smtpUser}>`;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? profile.email;

  if (!Number.isInteger(smtpPort)) {
    throw new Error("SMTP_PORT must be a valid number.");
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: [
      "New portfolio contact form message",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n"),
  });
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

  const contact = getContactPayload(payload);

  if ("error" in contact) {
    return NextResponse.json({ message: contact.error }, { status: 400 });
  }

  try {
    await sendMail(contact.data);
    return NextResponse.json({ message: "Message sent. I will reply soon." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "The email service could not send this message right now." },
      { status: 502 },
    );
  }
}
