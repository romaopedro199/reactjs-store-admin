export interface User {
  id: number;
  username: string;
  token: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SignupData {
  username: string;
  password: string;
}
