import { Router } from "express";
import * as userController from "../controllers/user.controller";

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.createUser);
userRouter.patch('/', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

export default userRouter;