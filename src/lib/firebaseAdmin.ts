import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';

let adminDb: FirebaseFirestore.Firestore;

export function getAdminDb() {
  if (adminDb) return adminDb;

  // Read config from file
  const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
  if (!fs.existsSync(configPath)) {
    throw new Error('firebase-applet-config.json not found');
  }
  
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  if (getApps().length === 0) {
    initializeApp({
      projectId: config.projectId,
    });
  }

  adminDb = getFirestore(getApps()[0], config.firestoreDatabaseId);
  return adminDb;
}
