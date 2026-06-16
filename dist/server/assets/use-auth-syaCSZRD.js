import "react";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const cfg = {
  apiKey: "AIzaSyD3u6gtXQw9fbDo-KeqefrzchcNVelt4sE",
  authDomain: "hr-document-management-abfaa.firebaseapp.com",
  projectId: "hr-document-management-abfaa",
  storageBucket: "hr-document-management-abfaa.firebasestorage.app",
  messagingSenderId: "308947813959",
  appId: "1:308947813959:web:70692a6defc9ba0ad0d362"
};
let app;
try {
  app = initializeApp(cfg);
} catch (err) {
  console.warn("Firebase client init warning:", err);
}
getFirestore(app);
const auth = getAuth(app);
getStorage(app);
const firebaseEnabled = Boolean(cfg.apiKey && cfg.projectId);
function getCurrentUser() {
  return auth.currentUser;
}
async function getIdToken() {
  const user = getCurrentUser();
  if (!user) return null;
  return user.getIdToken();
}
export {
  auth as a,
  getIdToken as b,
  firebaseEnabled as f,
  getCurrentUser as g
};
