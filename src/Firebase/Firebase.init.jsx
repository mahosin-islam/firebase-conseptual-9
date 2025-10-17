// DONT SHARE ANYWHERE
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase configuration (values আসবে .env থেকে)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,           
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference
export const auth = getAuth(app);



