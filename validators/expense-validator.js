import Joi from "joi";

export const addExpenseValidatior = Joi.object({
  amount: Joi.number().greater(0).required()
      .messages({
          'number.base': 'Amount must be a number',
          'number.greater': 'Amount must be greater than 0',
          'any.required': 'Amount is required'
      }),

  category: Joi.string().valid('Food', 'Transport', 'Health', 'Entertainment', 'Other').required()
      .messages({
          'any.only': 'Invalid category. Choose from Food, Transport, Health, Entertainment, or Other',
          'any.required': 'Category is required'
      }),

  date: Joi.date().iso().max('now').required()
      .messages({
          'date.base': 'Invalid date format (YYYY-MM-DD expected)',
          'date.max': 'Date cannot be in the future',
          'any.required': 'Date is required'
      })
});

