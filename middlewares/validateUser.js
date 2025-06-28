import { body, validationResult } from "express-validator";
export const validationRules = (type) => {
  switch (type) {
    case "signup":
      return [
        body("userDetails.firstName")
          .notEmpty()
          .withMessage("First name is required")
          .isAlpha()
          .withMessage("Only letters allowed"),

        body("userDetails.lastName")
          .notEmpty()
          .withMessage("Last name is required")
          .isAlpha()
          .withMessage("Only letters allowed"),

        body("userDetails.email")
          .notEmpty()
          .withMessage("Email is required")
          .isEmail()
          .withMessage("Invalid email"),
      ];

    case "login":
      return [
        body("email")
          .notEmpty()
          .withMessage("Email is required")
          .isEmail()
          .withMessage("Invalid email"),
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
