import {initializeApp} from 'firebase/app';
import "firebase/firestore";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
})

const provider = new GoogleAuthProvider()
export const auth = getAuth()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            GoogleAuthProvider.credentialFromResult(result)
        })
}
