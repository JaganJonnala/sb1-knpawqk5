import { User } from '../../types/models';
import { firebaseAuth } from '../firebase/auth';
import { firestoreService } from '../firebase/firestore';
import { AuthValidation } from './validation';
import { TokenService } from './tokens';
import { LoginResponse, RegisterData } from './types';

class AuthService {
  private user: User | null = null;

  async init(): Promise<void> {
    firebaseAuth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const userData = await firestoreService.get<User>('users', firebaseUser.uid);
        this.user = userData;
      } else {
        this.user = null;
      }
    });
  }

  async login(email: string, password: string): Promise<LoginResponse> {
    AuthValidation.validateLoginInput(email, password);

    const firebaseUser = await firebaseAuth.login(email, password);
    const userData = await firestoreService.get<User>('users', firebaseUser.uid);

    if (!userData) {
      throw new Error('User data not found');
    }

    this.user = userData;

    return {
      user: userData,
      tokens: {
        accessToken: await firebaseUser.getIdToken(),
        refreshToken: firebaseUser.refreshToken,
      },
    };
  }

  async register(data: RegisterData): Promise<LoginResponse> {
    AuthValidation.validateRegisterInput(data);

    const firebaseUser = await firebaseAuth.register(data.email, data.password);
    
    const userData: User = {
      id: firebaseUser.uid,
      email: data.email,
      name: data.name,
      phone: data.phone,
    };

    await firestoreService.create('users', userData);
    this.user = userData;

    return {
      user: userData,
      tokens: {
        accessToken: await firebaseUser.getIdToken(),
        refreshToken: firebaseUser.refreshToken,
      },
    };
  }

  async logout(): Promise<void> {
    await firebaseAuth.logout();
    await TokenService.removeTokens();
    this.user = null;
  }

  getUser(): User | null {
    return this.user;
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }
}

export const authService = new AuthService();