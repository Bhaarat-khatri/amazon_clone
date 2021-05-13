// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvJHDSNzCfKzhRgK66wdl0VcLsRgvwKs0",
  authDomain: "clone-610d7.firebaseapp.com",
  projectId: "clone-610d7",
  storageBucket: "clone-610d7.appspot.com",
  messagingSenderId: "773189860267",
  appId: "1:773189860267:web:9c98c5698c692bcdda70ee",
  measurementId: "G-NLRPTCCK30",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
