import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mika1shanela@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
    return NextResponse.json({ status: "OK" });
  } catch (error) {
    return NextResponse.json({ status: "Error getting email.", error });
  }
}
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const data = await resend.emails.send({
      from: "mika1shanela@gmail.com",
      to: "mika1shanela@gmail.com",
      subject: "Hello world",
      html: `<div>
        <strong>${name} (${email})</strong>
        <p>${message}</p></div>`,
    });

    return NextResponse.json({ status: "OK - GET", data });
  } catch (error) {
    return NextResponse.json({ status: "Error sending email.", error });
  }
}
