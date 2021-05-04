const joi = require("joi");

module.exports = {
  createSchema: joi.object({
    name: joi.string().min(4).max(255).required(),
    description: joi.string().min(4).max(255).required(),
    price: joi.number().precision(2).min(0),
    stock: joi.number().precision(0).min(0),
  }),
  updateSchema: joi.object({
    name: joi.string().min(4).max(255).required(),
    description: joi.string().min(4).max(255).required(),
    price: joi.number().precision(2).min(0),
    stock: joi.number().precision(0).min(0),
  }),
  getSchema: joi.object({
    name: joi.string().min(4).max(255).optional(),
  }),
  deleteSchema: joi.object({
    products: joi.array().items(joi.string()),
  }),
};
