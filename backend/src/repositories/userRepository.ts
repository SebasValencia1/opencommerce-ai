import UserModel from "../models/User";
import { IUser } from "../interfaces/User";

const createUser = async (user: IUser) => {
  return await UserModel.create(user);
};

export default { createUser };
