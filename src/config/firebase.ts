import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAvpIHX0ECFRJu6b4laqE2cfTMIeh4tvyk",
  authDomain: "servicepro-fa8d0.firebaseapp.com",
  projectId: "servicepro-fa8d0",
  storageBucket: "servicepro-fa8d0.firebasestorage.app",
  messagingSenderId: "748697828445",
  appId: "1:748697828445:web:abdd9550342b57026061b4",
  measurementId: "G-HZ8FL0DTZW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);