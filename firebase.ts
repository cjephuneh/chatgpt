import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACTXXKrmhMaR0hLZrH5F3b4rRLomdAhfs",
  authDomain: "chatgpt-messenger-edc53.firebaseapp.com",
  projectId: "chatgpt-messenger-edc53",
  storageBucket: "chatgpt-messenger-edc53.appspot.com",
  messagingSenderId: "41066916848",
  appId: "1:41066916848:web:aeece3f5001d455ad54b35"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };