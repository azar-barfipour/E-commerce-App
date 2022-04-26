import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCzVQOin3DE-o2JaPw1cOj5SW50LtFW1WY",
  authDomain: "udemy-redux-99e3b.firebaseapp.com",
  databaseURL: "https://udemy-redux-99e3b-default-rtdb.firebaseio.com",
  projectId: "udemy-redux-99e3b",
  storageBucket: "udemy-redux-99e3b.appspot.com",
  messagingSenderId: "906869383835",
  appId: "1:906869383835:web:8123709c154cae27db9c3e",
  measurementId: "G-CCNSPNYEEY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const sighIn = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res.user);
      console.log("loggedIn");
    })
    .catch((err) => console.log(err.message));
};
