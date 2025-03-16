import express from "express";
import mongoose from "mongoose";
import expenseRouter from "./routes/expense-routes.js";
import signupRouter from "./routes/signup-route.js";
import loginRouter from "./routes/login-route.js";


await mongoose.connect(process.env.MONGO_URI)






const app = express();
app.use(express.json());


app.use("/api/expenses", expenseRouter);
app.use("/api/auth", signupRouter);
app.use("/api/auth", loginRouter);





const port = process.env.PORT || 3005
app.listen (port, () => {
  console.log (`Server is listening on port ${port} `)
})