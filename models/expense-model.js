import {Schema, model} from "mongoose";


const expenseSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true }
})

export const ExpenseModel = model ("Expense", expenseSchema)
  