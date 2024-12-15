import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import { User } from '../../types/models';

export const firebaseAuth = {
  login: async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  },

  register: async (email: string, password: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  },

  logout: () => signOut(auth),

  onAuthStateChanged: (callback: (user: FirebaseUser | null) => void) => 
    onAuthStateChanged(auth, callback),

  getCurrentUser: () => auth.currentUser,

  mapFirebaseUser: (firebaseUser: FirebaseUser): User => ({
    id: firebaseUser.uid,
    email: firebaseUser.email || '',
    name: firebaseUser.displayName || '',
    phone: firebaseUser.phoneNumber || '',
    avatar: firebaseUser.photoURL || '',
  })
};