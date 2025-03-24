import { LoginCredentials, SignupData, User } from "@/types/User.types";
import api from "@/services/api";

export const login = async (credentials: LoginCredentials): Promise<User> => {
  const response = await api.post<User>("/login", credentials);
  return response.data;
};

export const signup = async (userData: SignupData): Promise<User> => {
  const response = await api.post<User>("/signup", userData);
  return response.data;
};
