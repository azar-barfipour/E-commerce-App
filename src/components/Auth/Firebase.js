import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

console.log(provider);

export const sighIn = () => {
  signInWithPopup(auth, provider)
    .then(() => {})
    .catch((err) => console.log(err.message));
};
