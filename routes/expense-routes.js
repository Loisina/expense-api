import { Router } from "express";
import { addExpense, deleteExpense, getExpense, getExpenses, updateExpense } from "../controllers/expense-controller.js";



const expenseRouter = Router();

expenseRouter.post("/expenses", addExpense);
expenseRouter.get("/expenses", getExpenses);
expenseRouter.get("/expenses/:id", getExpense);
expenseRouter.patch("/expenses/:id", updateExpense);
expenseRouter.delete("/expenses/:id", deleteExpense);

export default expenseRouter;
