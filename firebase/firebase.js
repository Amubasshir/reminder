import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBbOyAaYyRXbEicaOajYwy_ROnbSx1v2lc',
  authDomain: 'reminder-54a24.firebaseapp.com',
  projectId: 'reminder-54a24',
  storageBucket: 'reminder-54a24.appspot.com',
  messagingSenderId: '354342708512',
  appId: '1:354342708512:web:4c27e33b281a346994a345',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
