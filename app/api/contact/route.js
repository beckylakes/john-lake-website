import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, phone, message, service } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail", // or use host/port for other providers
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: "studlakes5@gmail.com",
            subject: `[NEW ENQUIRY] Contact from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone || "Not provided"}
                Service interested in: ${service || "Not specified"}
                Message: ${message}
                `,
            html: `
                <h3>New Enquiry from Website</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                <p><strong>Service interested in:</strong> ${service || "Not specified"}</p>
                <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
  `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: "Email sent" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Contact form error:", error);
        return new Response(JSON.stringify({ error: "Failed to send email" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}