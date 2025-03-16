import { Router } from "express";
import { login } from "../controllers/login-controller.js";


const loginRouter = Router();

loginRouter.post ("/expenses/login", login)

export default loginRouter;