const joi = require("joi");

module.exports = {
  createSchema: joi.object({
    product: joi.string().min(4).max(255).required(),
  }),
  deleteOneSchema: joi.object({
    product: joi.string().min(4).max(255).required(),
    qty: joi.number().min(0).required(),
  }),
};
