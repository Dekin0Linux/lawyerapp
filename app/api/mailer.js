// In your Next.js server-side file (e.g., pages/api/contact.js)


export default async function handler(req, res) {
    console.log(nodemailer)
  const { email, name, msg } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dekinlinux@gmail.com",
      pass: "fjrvfsvomrhcnhux",
    },
  });

  const mailOptions = {
    from: `${name} <dekinlinux@gmail.com>`,
    to: "phaisalsalif@gmail.com",
    subject: "Request from website",
    html: msg,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
