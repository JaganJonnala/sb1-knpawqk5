import { collection, query, where, getDocs, doc, getDoc, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { PartnerProfile } from '../../types/partner';

class PartnerService {
  private readonly PARTNERS_COLLECTION = 'partners';

  async createProfile(userId: string, data: Partial<PartnerProfile>): Promise<PartnerProfile> {
    try {
      // Check if profile already exists
      const existingProfile = await this.getProfileByUserId(userId);
      if (existingProfile) {
        throw new Error('Partner profile already exists');
      }

      // Create the partner profile
      const partnerData = {
        userId, // Store the user ID to link the partner profile
        ...data,
        rating: 0,
        reviewCount: 0,
        isVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const docRef = await addDoc(collection(db, this.PARTNERS_COLLECTION), partnerData);
      return { id: docRef.id, ...partnerData } as PartnerProfile;
    } catch (error) {
      console.error('Error creating partner profile:', error);
      throw error;
    }
  }

  async getProfileByUserId(userId: string): Promise<PartnerProfile | null> {
    try {
      const q = query(
        collection(db, this.PARTNERS_COLLECTION),
        where('userId', '==', userId)
      );
      
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        return null;
      }

      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() } as PartnerProfile;
    } catch (error) {
      console.error('Error fetching partner profile:', error);
      throw error;
    }
  }

  async getProfileById(partnerId: string): Promise<PartnerProfile | null> {
    try {
      const docRef = doc(db, this.PARTNERS_COLLECTION, partnerId);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        return null;
      }

      return { id: docSnap.id, ...docSnap.data() } as PartnerProfile;
    } catch (error) {
      console.error('Error fetching partner profile:', error);
      throw error;
    }
  }
}

export const partnerService = new PartnerService();