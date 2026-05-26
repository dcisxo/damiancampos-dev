const router = require("express").Router();
const { body } = require("express-validator");
const { submitContact } = require("../controllers/contactController");

router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message")
      .trim()
      .isLength({ min: 10 })
      .withMessage("Message must be at least 10 characters"),
  ],
  submitContact,
);

module.exports = router;
