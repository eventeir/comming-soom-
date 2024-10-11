import nodemailer from 'nodemailer';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, email } = body;

    // Create the transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    // Email options for the user
    const mailOptionsToUser = {
      from: process.env.ZOHO_USER,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <table style="text-align: center; max-width: 400px; font-family: sans-serif; margin: auto">
  <tr>
    <td style="padding: 10px 0;">
      <h2 style="margin: 0">Dear <strong>${name}</strong>,</h2>
    </td>
  </tr>
  <tr>
    <td style="padding: 10px 0;">
      Thank you for subscribing to our newsletter! We appreciate you joining our community. You will be the first to know about our upcoming launches and important updates.
    </td>
  </tr>
  <tr>
    <td style="padding: 10px 0;">
      If you have any questions or need further assistance, don’t hesitate to reach out to us. We're here to help!
    </td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 20px 0">
      <a
        style="
          margin: auto;
          padding: 9px 10px;
          border-radius: 6px;
          border: none;
          background: black;
          color: whitesmoke;
          width: fit-content;
          font-weight: bold;
          text-decoration: none;
        "
        href="https://www.eventeir.ai/"
      >Visit Our Website</a>
    </td>
  </tr>
</table>

      `,
    };

    // Send the message to Telegram
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: `
          <b>New Message</b>
          <b>Name:</b> ${name}
          <b>Email:</b> ${email}
        `,
        parse_mode: 'HTML',
      }),
    });

    // Send email to user
    await transporter.sendMail(mailOptionsToUser);

    return {
      error: false,
      emailSent: true,
      message: 'Email sent successfully',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      error: true,
      emailSent: false,
      message: 'Email sending failed: ',
    };
  }
});
