import { IUser } from "../interfaces/user";
import UserModel from "../models/user";

const createUser = async (user: IUser) => {
  return await UserModel.create(user);
};

const findUserByEmail = async (email: string) => {
  return await UserModel.findOne({ email });
};

export default { createUser, findUserByEmail };
