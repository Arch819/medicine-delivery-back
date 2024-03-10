const Joi = require("joi");

const orderListSchema = {
  medicine: Joi.array(),
  totalPrice: Joi.string()
    .required()
    .messages({ "any.required": "missing required totalPrice field" }),
};

const createOrderSchemas = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .required()
    .messages({ "any.required": "missing required email field" }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": "missing required phone field" }),
  address: Joi.string()
    .required()
    .messages({ "any.required": "missing required address field" }),
  orderList: Joi.object(orderListSchema).required(),
});

const getOrderSchema = Joi.object({
  email: Joi.string()
    .required()
    .messages({ "any.required": "missing required email field" }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": "missing required phone field" }),
});

module.exports = { createOrderSchemas, getOrderSchema };
