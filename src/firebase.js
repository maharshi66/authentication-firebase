import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
/*	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID*/
    apiKey: "AIzaSyBs5BGSw94ZTP7jsc7atXjZwGNbFTr4QKg",
    authDomain: "auth-dev-918a1.firebaseapp.com",
    projectId: "auth-dev-918a1",
    storageBucket: "auth-dev-918a1.appspot.com",
    messagingSenderId: "515850416818",
    appId: "1:515850416818:web:213e55c898fe42655c4fab"
})

/*const app = firebase.initializeApp({

})*/

export const auth = app.auth();
export default firebase;