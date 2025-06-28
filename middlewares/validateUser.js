import { body, validationResult } from "express-validator";
export const validationRules = (type) => {
  switch (type) {
    case "signup":
      return [
        body("userDetails.fullName")
          .notEmpty()
          .withMessage("Full name is required")
          .isAlpha()
          .withMessage("Only letters allowed"),

        body("userDetails.email")
          .notEmpty()
          .withMessage("Email is required")
          .isEmail()
          .withMessage("Invalid email"),

        body("userDetails.password")
          .notEmpty()
          .withMessage("Password is required")
          .isStrongPassword({ minLength: 5 })
          .withMessage("Password is too weak"),
      ];

    case "login":
      return [
        body("email")
          .notEmpty()
          .withMessage("Email is required")
          .isEmail()
          .withMessage("Invalid email"),

        body("password").notEmpty().withMessage("Password is required"),
      ];
    default:
      return [];
  }
};
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map((e) => e.msg),
    });
  }
  next();
};
