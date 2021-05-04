const joi = require("joi");

module.exports = {
  getOneSchema: joi.object({
    name: joi.string().min(4).max(255).optional(),
  }),
};
