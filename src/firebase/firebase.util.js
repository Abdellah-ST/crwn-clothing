import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyAc7x5YAE63bhMPXG6E_oZa1nmS-T9TO2c",
    authDomain: "crwn-db-9335d.firebaseapp.com",
    projectId: "crwn-db-9335d",
    storageBucket: "crwn-db-9335d.appspot.com",
    messagingSenderId: "292297625829",
    appId: "1:292297625829:web:c081533686a4a41033c40c",
    measurementId: "G-G1ZRRC1KET"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;