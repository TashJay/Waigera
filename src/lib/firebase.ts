import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Config would be dynamically loaded in a real environment
  // For AI Studio preview, we will use mock or injected configs if available
  apiKey: (import.meta as any).env.VITE_FIREBASE_API_KEY || "mock-api-key",
  authDomain: (import.meta as any).env.VITE_FIREBASE_AUTH_DOMAIN || "mock-domain",
  projectId: (import.meta as any).env.VITE_FIREBASE_PROJECT_ID || "total-context-ljlsj",
  storageBucket: (import.meta as any).env.VITE_FIREBASE_STORAGE_BUCKET || "mock-bucket",
  messagingSenderId: (import.meta as any).env.VITE_FIREBASE_MESSAGING_SENDER_ID || "mock-sender",
  appId: (import.meta as any).env.VITE_FIREBASE_APP_ID || "mock-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
