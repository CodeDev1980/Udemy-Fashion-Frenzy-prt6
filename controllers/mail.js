const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = async (req, res) => {
    async function mainMail(name, email, subject, message) {
        const transporter = await nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });
        const mailOption = {
            from: process.env.GMAIL_USER,
            to: process.env.EMAIL,
            subject: subject,
            html: `You got a message from 
                Email : ${email} 
                Name: ${name}
                Message: ${message}`,
        };
        try {
            await transporter.sendMail(mailOption);
            return Promise.resolve("Message Sent Successfully!");
        } catch (error) {
            return Promise.reject(error);
        }
    }
    const { yourName, yourEmail, yourSubject, yourMessage } = req.body;
    try {
        await mainMail(yourName, yourEmail, yourSubject, yourMessage);

        res.render("thankYou",{
            title: "Thank your for your message"
        });
    } catch (error) {
        console.log("Message Could not be Sent");
    }
}