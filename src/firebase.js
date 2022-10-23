import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCHASQuOmroMJwaODZhNfjUiuDSvqmGaWQ",
  authDomain: "disney-bd1d1.firebaseapp.com",
  projectId: "disney-bd1d1",
  storageBucket: "disney-bd1d1.appspot.com",
  messagingSenderId: "590557751858",
  appId: "1:590557751858:web:c5f652b09ba994a53a6a2b",
  measurementId: "G-6KYJJWCQJZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
