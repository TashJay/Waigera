import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
const app = initializeApp({projectId: 'test'});
try {
  const db = getFirestore(app, "test-db");
  console.log("Success with 2nd arg");
} catch(e) {
  console.log("Failed", e.message);
}
