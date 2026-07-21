import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGo2bgIOHnfsSkLRV7iRMb-1u5EJrGgEU",
  authDomain: "valorstars-573457.firebaseapp.com",
  projectId: "valorstars-573457",
  storageBucket: "valorstars-573457.firebasestorage.app",
  messagingSenderId: "722176878544",
  appId: "1:722176878544:web:5927e6a19b1296c375bbd5",
  measurementId: "G-8B43NQMVVH"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);