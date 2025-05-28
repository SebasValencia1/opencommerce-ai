import userRepository from "../repositories/userRepository";
import bcrypt from "bcryptjs";
import { BadRequestError } from "../exceptions/BadRequestError";


export const register = async (name: string, email: string, password: string) => {
  // Check if user already exists
  const existingUser = await userRepository.findUserByEmail(email);
  if (existingUser) {
    throw new BadRequestError('User with this email already exists');
  }

  // Hash password and create user
  const hashedPassword = await hashPassword(password);
  return userRepository.createUser({ name, email, password: hashedPassword });
};

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
}

export default {register}
