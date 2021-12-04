import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

try {
  firebase.initializeApp({
  apiKey: "AIzaSyAv96ARtqqfsW083HWi2kW4g-WsUoO314k",
  authDomain: "svchat-d9cf8.firebaseapp.com",
  projectId: "svchat-d9cf8",
  storageBucket: "svchat-d9cf8.appspot.com",
  messagingSenderId: "1040930990355",
  appId: "1:1040930990355:web:faedd6c4860f814db3d2e6"
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export const fb = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};
