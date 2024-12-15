export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
  tokens: AuthTokens;
}

export interface RefreshTokenResponse {
  accessToken: string;
}