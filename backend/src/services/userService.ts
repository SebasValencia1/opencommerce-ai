import userRepository from "../repositories/userRepository";
import bcrypt from "bcryptjs";

const register = async (name: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return userRepository.createUser({ name, email, password: hashedPassword });
};

export default { register };
