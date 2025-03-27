import { User } from "@/types/User.types";
import api from "@/services/api";
import { SignInCredentials, SignUpCredentials } from "@/types/Auth.types";

export const login = async (credentials: SignInCredentials): Promise<User> => {
  const response = await api.post<User>("/login", credentials);
  return response.data;
};

export const signup = async (userData: SignUpCredentials): Promise<User> => {
  const response = await api.post<User>("/signup", userData);
  return response.data;
};
