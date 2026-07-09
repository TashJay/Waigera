import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const config = {
  projectId: "total-context-ljlsj",
  appId: "1:1011518502859:web:14ed0ed3509d90592a684e",
  apiKey: "AIzaSyDc7zYyR7LCoDFw-DU8Zywcdc4-W5E9eK8",
  authDomain: "total-context-ljlsj.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-679a53c2-8b71-4f44-b3f0-a6e6e2a4feb6"
};
const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function run() {
  try {
    const docRef = doc(db, 'pricing', 'config');
    await setDoc(docRef, { base_fare: 100 });
    const snap = await getDoc(docRef);
    console.log("Client SDK exists:", snap.exists());
  } catch(e) {
    console.error("Client SDK error:", e.message);
  }
}
run();
