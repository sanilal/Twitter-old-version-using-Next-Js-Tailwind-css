// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v1-50cd7.firebaseapp.com",
  projectId: "twitter-v1-50cd7",
  storageBucket: "twitter-v1-50cd7.appspot.com",
  messagingSenderId: "226296972224",
  appId: "1:226296972224:web:e99b04ce92a29ee2cd3e25"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage =  getStorage();
export {app, db, storage};

