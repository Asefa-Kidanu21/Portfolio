import { createContactModel } from "./contact.model.js";
import transporter from "../../config/email.js";

export const createContactService = async (
  name,
  email,
  message
) => {
  // 1. Save the message in the database
  const contact = await createContactModel(
    name,
    email,
    message
  );

  // 2. Send email notification
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Portfolio Contact Message from ${name}`,
    text: `
You received a new message from your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}
    `,
  });

  // 3. Return the saved contact
  return contact;
};