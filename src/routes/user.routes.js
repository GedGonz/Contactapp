import { Router } from "express";
import * as UserController from "../controller/user.controller";

const router = Router();

router.get('/', UserController.getAllUsers);

router.post('/', UserController.createNewUser);

export default router;