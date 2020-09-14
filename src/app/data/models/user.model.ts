export interface LoginData {
  login_domain: string;
}

export interface User {
  email: string;
  password: string;
}

export interface UserState {
  email?: string;
  token: string;
  permissions?: Array<string>;
}
