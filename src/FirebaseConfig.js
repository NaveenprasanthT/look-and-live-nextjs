import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCR3mNlAANtzTjR9kRASAGuPS2WJ27LJbI",
    authDomain: "look-and-live-20571.firebaseapp.com",
    projectId: "look-and-live-20571",
    storageBucket: "look-and-live-20571.appspot.com",
    messagingSenderId: "334639506723",
    appId: "1:334639506723:web:60bcd9d7638d66bbcd9896",
    measurementId: "G-480ZNLXF48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);