import { ExpenseModel } from "../models/expense-model.js";
import { addExpenseValidatior } from "../validators/expense-validator.js";



export const addExpense = async (req, res, next) => {
  try {
    const {error, value} = addExpenseValidatior.validate (req.body, {abortEarly: false})
    const result = await ExpenseModel.create (value);
    res.status(201).json(result);
  }catch (error) {
    next(error)
  }
}


export const getExpenses = async (req, res, next) => {
 try {
  const result = await ExpenseModel.find ({})
  res.status(200).json(result)
 } catch (error) {
  next(error)
 }
}

export const getExpense = async (req, res, next) => {
  try {
   const result = await ExpenseModel.findById (req.params.id);
   res.status(200).json(result)
  } catch (error) {
   next(error)
  }
 }

 export const updateExpense = async (req, res, next) => {
  try {
   const result = await ExpenseModel.findByIdAndUpdate(req.params.id);
   res.status(200).json(result)
  } catch (error) {
   next(error)
  }
 }
 export const deleteExpense = async (req, res, next) => {
  try {
   const result = await ExpenseModel.findByIdAndDelete(req.params.id);
   res.status(200).json(result)
  } catch (error) {
   next(error)
  }
 }
