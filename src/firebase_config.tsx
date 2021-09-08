import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCdbG59PFDR2EDVUOyLMA7TfXhn0_umoHQ',
  authDomain: 'where-is-waldo-bb563.firebaseapp.com',
  projectId: 'where-is-waldo-bb563',
  storageBucket: 'where-is-waldo-bb563.appspot.com',
  messagingSenderId: '996858267397',
  appId: '1:996858267397:web:7c3d07d14f98cf445a596c',
};

firebase.initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
