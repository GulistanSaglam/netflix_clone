// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, where, query } from "firebase/firestore";

const firebaseConfig = {
    /* YOUR CONFIGURATION */
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const productsCollection = query(collection(db, "products"), where("active", "==", true));

export { auth, productsCollection };
export default db;

