import mongoose, { Schema, model } from "mongoose";
import normalize from "normalize-mongoose"


const expenseSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true }
},{
  timestamps: true
});

expenseSchema.plugin(normalize)


export const ExpenseModel = model ("Expense", expenseSchema)
  