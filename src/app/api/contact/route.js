// src/app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `${subject} - From ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
