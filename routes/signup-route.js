import { Router } from "express";
import { signUp } from "../controllers/signup-controller.js";

const signupRouter = Router();


signupRouter.post ("/expenses/signup", signUp )


export default signupRouter;