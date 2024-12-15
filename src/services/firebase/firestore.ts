import { 
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  DocumentData,
  setDoc
} from 'firebase/firestore';
import { db } from '../../config/firebase';

export const firestoreService = {
  create: async <T extends DocumentData>(
    collectionName: string,
    data: T
  ) => {
    const docRef = await addDoc(collection(db, collectionName), data);
    return { id: docRef.id, ...data };
  },

  createWithFbUID: async <T extends DocumentData>(
    collectionName: string,
    user: T
  ) => {
    debugger;
    const userRef = doc(db, collectionName, user.id);
    
    // Set the document in Firestore
    debugger;
    const docRef =  await setDoc(userRef, user);
    debugger;
    return { user: docRef};
  },

  get: async <T>(
    collectionName: string,
    id: string
  ): Promise<T | null> => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } as T : null;
  },

  update: async <T extends DocumentData>(
    collectionName: string,
    id: string,
    data: Partial<T>
  ) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);
  },

  delete: async (collectionName: string, id: string) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  },

  query: async <T>(
    collectionName: string,
    field: string,
    operator: '==' | '!=' | '>' | '<' | '>=' | '<=',
    value: any
  ): Promise<T[]> => {
    const q = query(collection(db, collectionName), where(field, operator, value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as T[];
  },

  getAll: async <T>(collectionName: string): Promise<T[]> => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as T[];
  }
};