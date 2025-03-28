import api from "@/services/api";
import { User } from "@/types/user.types";
import { SignInCredentials, SignUpCredentials } from "@/types/auth.types";

export const login = async (credentials: SignInCredentials): Promise<User> => {
  const response = await api.post<User>("/login", credentials);
  return response.data;
};

export const signup = async (userData: SignUpCredentials): Promise<User> => {
  const response = await api.post<User>("/signup", userData);
  return response.data;
};
