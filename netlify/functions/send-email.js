import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email, description } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER || "nodemailer.test.services@gmail.com",
      to: "rammagdalaga80@gmail.com",
      subject: "🔔 New Contact Form Submission",
      html: `
        <h3>New Inquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Description:</b> ${description}</p>
        <p><b>Consent:</b> User agreed to the consent.</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: "Failed to send email" }),
    };
  }
}
