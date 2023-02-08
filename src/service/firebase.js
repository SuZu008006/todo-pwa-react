import {initializeApp} from 'firebase/app'
import 'firebase/firestore'
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getMessaging, getToken} from 'firebase/messaging'

const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
})

export const auth = getAuth()
export const db = getFirestore(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            GoogleAuthProvider.credentialFromResult(result)
        })
}

export const logOut = () => {
    signOut(auth).then(() => {
        document.location.reload()
    })
}

export const messaging = getMessaging(app)
navigator.serviceWorker
    .register('./firebase-messaging-sw.js')
    .then(function (registration) {
        console.log("Registration successful, scope is:", registration.scope);
        getToken(
            messaging,
            {vapidKey: process.env.REACT_APP_FIREBASE_PUBLIC_KEY})
            .then((currentToken) => {
                if (currentToken) {
                    console.log('current token for client: ', currentToken);
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        })
    })
    .catch(function (err) {
        console.log("Service worker registration failed, error:", err);
    })

Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
        console.log('Notification permission granted.')
    }
})
