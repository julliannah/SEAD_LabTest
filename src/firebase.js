import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAxjgCVs2qtFuUFrbP5C2-B_uZZA7dgybU",
    authDomain: "labtest2-22a96.firebaseapp.com",
    projectId: "labtest2-22a96",
    storageBucket: "labtest2-22a96.appspot.com",
    messagingSenderId: "183923491868",
    appId: "1:183923491868:web:85255b8894d01353e14bd9",
    measurementId: "G-DLHZ7WKN4E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase