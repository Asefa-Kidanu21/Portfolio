

import { createContactService } from "./contact.service.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email and message are required",
      });
    }

    const contact = await createContactService(
      name,
      email,
      message
    );

    return res.status(201).json({
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    console.error("Create contact error:", error);

    return res.status(500).json({
      message: "Failed to send message",
    });
  }
};