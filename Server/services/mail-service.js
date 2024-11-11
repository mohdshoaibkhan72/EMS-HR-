const transport = require("../configs/mail-config");
const mailTemplate = require("../templates/mail-template");
const smtpAuthUser =
  process.env.SMTP_AUTH_USER || "mohdshoaibkhan7211@gmail.com";

class MailService {
  sendForgotPasswordMail = async (name, email, otp) => {
    const { subject, text } = mailTemplate.forgotPassword(name, otp);
    return await this.sendMail(email, subject, text);
  };

  sendMail = async (to, subject, text) => {
    const mailOption = {
      from: smtpAuthUser,
      to,
      subject,
      text,
    };

    try {
      const info = await transport.sendMail(mailOption);
      console.log("Email sent: ", info.response);
      return info;
    } catch (err) {
      console.error("Error sending email: ", err);
      throw err;
    }
  };
}

module.exports = new MailService();
