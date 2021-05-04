const joi = require("joi");

module.exports = {
  createSchema: joi.object({
    username: joi.string().min(4).max(255).required(),
    password: joi.string().min(8).max(32).trim().required(),
  }),
  updateUserSchema: joi.object({
    username: joi.string().min(4).max(255).required(),
    type: joi
      .string()
      .valid("client", "vet", "seller", "washer", "admin")
      .required(),
  }),
  updatePasswordSchema: joi.object({
    password: joi.string().min(8).max(32).trim().required(),
    newPassword: joi.string().min(8).max(32).trim().required(),
  }),
  getUserSchema: joi.object({
    type: joi
      .string()
      .valid("client", "vet", "seller", "washer", "admin")
      .optional(),
  }),
};
