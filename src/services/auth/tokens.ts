import { AuthTokens } from './types';

export class TokenService {
  private static readonly TOKEN_KEY = 'auth_tokens';

  static async getTokens(): Promise<AuthTokens | null> {
    try {
      const tokens = localStorage.getItem(this.TOKEN_KEY);
      return tokens ? JSON.parse(tokens) : null;
    } catch {
      return null;
    }
  }

  static async setTokens(tokens: AuthTokens): Promise<void> {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(tokens));
  }

  static async removeTokens(): Promise<void> {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}