import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAywSWXIbzznG9frtB1Sk_6r_B3Bje8xJA",
  authDomain: "organize-app-bpmendes.firebaseapp.com",
  databaseURL: "https://organize-app-bpmendes-default-rtdb.firebaseio.com",
  projectId: "organize-app-bpmendes",
  storageBucket: "organize-app-bpmendes.firebasestorage.app",
  messagingSenderId: "958695381477",
  appId: "1:958695381477:web:cbb07dd98782bee1a9f70c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };