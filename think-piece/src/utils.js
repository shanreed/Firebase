import { firestore, auth } from './firebase';

export const collectData = doc => ({ id: doc.id, ...doc.data() })

//OR
// export const collectData = doc => {
//     return { id: doc.id, ...doc.data() }
// };

export const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      return await firestore
        .collection('users')
        .doc(uid)
    } catch (error) {
      console.error('Error fetching user', error.message);
    }
  };