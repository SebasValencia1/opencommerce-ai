import axios from 'axios';
import { config } from '../config';

const API_URL = config.API_BASE_URL;

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterPayload) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};
