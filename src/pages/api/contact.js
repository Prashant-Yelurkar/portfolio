// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

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

        return res.status(200).json({ success: true, message: 'Email sent successfully.' });
    } catch (err) {
        console.error('Email error:', err);
        return res.status(500).json({ success: false, message: 'Error while sending email.' });
    }
}
