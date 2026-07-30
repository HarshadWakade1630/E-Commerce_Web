import { resend } from "./resend";

export async function sendOtpEmail(
  email: string,
  otp: string
): Promise<void> {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: "Verify your account",

    html: `
      <div>
        <h2>Your OTP Code</h2>

        <p>${otp}</p>

        <p>
          Expires in 10 minutes.
        </p>
      </div>
    `,
  });
}