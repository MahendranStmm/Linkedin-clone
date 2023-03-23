import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBakH_jkievrC1WwKKjIJ9XnUza89Fx3fI",
  authDomain: "linkedin-clone-9c77c.firebaseapp.com",
  projectId: "linkedin-clone-9c77c",
  storageBucket: "linkedin-clone-9c77c.appspot.com",
  messagingSenderId: "1033403337678",
  appId: "1:1033403337678:web:36a4ec9133dcb4ca9e799f",
};

const app = initializeApp(firebaseConfig);
const dp = getFirestore();
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, dp, auth, provider, timestamp, storage };
