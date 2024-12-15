import { validateEmail, validatePassword } from '../../utils/validation';
import { RegisterData } from './types';
import { MOCK_USERS } from '../../constants/auth';

export class AuthValidation {
  static validateLoginInput(email: string, password: string): void {
    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    if (!validatePassword(password)) {
      throw new Error('Invalid password format');
    }
  }

  static validateRegisterInput(data: RegisterData): void {
    if (!validateEmail(data.email)) {
      throw new Error('Invalid email format');
    }

    if (!validatePassword(data.password)) {
      throw new Error('Invalid password format');
    }

    if (MOCK_USERS.some(u => u.email === data.email)) {
      throw new Error('Email already registered');
    }
  }
}