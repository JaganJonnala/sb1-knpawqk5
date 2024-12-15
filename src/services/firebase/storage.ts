import { 
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import { storage } from '../../config/firebase';

export const storageService = {
  upload: async (path: string, file: File) => {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  },

  delete: async (path: string) => {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  },

  getUrl: async (path: string) => {
    const storageRef = ref(storage, path);
    return getDownloadURL(storageRef);
  }
};