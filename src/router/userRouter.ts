import express from "express";
import {UserController} from "../controllers/userController";
import {UserModel} from "../models/userModel";
import 'dotenv/config';

const uri = process.env.URI;

const userRouter = express.Router();
const model = new UserModel(`${uri}`);
const controller = new UserController(model);

userRouter.get('/', controller.getUser)
userRouter.get('/display/:id', controller.displayUser)
userRouter.get('/createUser', controller.CreateUser)
userRouter.get('/delete/:id', controller.deleteUser)
userRouter.post('/addNewUser', controller.addNewUser)

export default userRouter;