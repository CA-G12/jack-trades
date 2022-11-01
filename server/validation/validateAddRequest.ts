import Joi from 'joi';

const validateAddRequest = Joi.object({
  senderId: Joi.number().required(),
  productId: Joi.number().required(),
  products: Joi.array().items(Joi.number()),
});

export default validateAddRequest;
