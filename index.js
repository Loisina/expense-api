import express from "express";
import mongoose from "mongoose";
import expenseRouter from "./routes/expense-routes.js";


await mongoose.connect(process.env.MONGO_URI)






const app = express();
app.use(express.json())
app.use(expenseRouter)



const port = process.env.PORT || 3005
app.listen (port, () => {
  console.log (`Server is listening on port ${port} `)
})