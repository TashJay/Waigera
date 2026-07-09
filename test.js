import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
const config = { projectId: "total-context-ljlsj", firestoreDatabaseId: "ai-studio-679a53c2-8b71-4f44-b3f0-a6e6e2a4feb6" };
const app = initializeApp({ projectId: config.projectId, credential: applicationDefault() });
const db = getFirestore(app);
db.collection('pricing').doc('config').get().then(doc => console.log(doc.exists)).catch(console.error);
