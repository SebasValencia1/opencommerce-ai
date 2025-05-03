import { Request, Response } from "express";
import userService from "../services/userService";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await userService.register(name, email, password);
  res.status(201).json(user);
};
