import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8Lh7Cj6EM-lq3SGwwE3aJc6Q79BewIzI",
  authDomain: "signal-clone-eb943.firebaseapp.com",
  projectId: "signal-clone-eb943",
  storageBucket: "signal-clone-eb943.appspot.com",
  messagingSenderId: "880806769481",
  appId: "1:880806769481:web:7aa4f2f0fdadf0c58ae098"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
} 

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };