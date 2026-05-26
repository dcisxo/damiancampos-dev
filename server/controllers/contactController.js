const { validationResult } = require("express-validator");
const ContactMessage = require("../models/contactMessage");
const { sendContactNotification } = require("../utils/mailer");

// POST /api/contact — public
const submitContact = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  try {
    await ContactMessage.create({ name, email, message });

    // Best-effort email — don't fail the request if email sending errors
    sendContactNotification({ name, email, message }).catch((err) => {
      console.error("Email notification failed:", err.message);
    });

    res.status(201).json({ message: "Message received. Thank you!" });
  } catch (err) {
    next(err);
  }
};

module.exports = { submitContact };
