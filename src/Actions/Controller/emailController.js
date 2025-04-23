// pages/api/contact.js
import nodemailer from 'nodemailer';

export const SendEmail = async (props) => {


    const { name, email, message } = props;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thanks for contacting us!',
            html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out. We received your message:</p>
        <blockquote>${message}</blockquote>
        <p>We'll get back to you soon.</p>
      `,
        });

        return { success: true, info: 'Email sent successfully.' }
    } catch (err) {
        console.error('Email error:', err);
        return { success: false, info: 'Error While Sending Email' }
    }
}
