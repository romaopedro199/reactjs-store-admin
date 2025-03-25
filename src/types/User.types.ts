export interface User {
  id: number;
  username: string;
  token: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
}
