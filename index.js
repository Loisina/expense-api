import express from "express";
import mongoose from "mongoose";


await mongoose.connect(process.env.MONGO_URI)






const app = express();



const port = process.env.PORT || 3005
app.listen (port, () => {
  console.log (`Server is listening on port ${port} `)
})