import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCprK9urSi6e-ARVqGye9TGCM1631NTVdE",

    authDomain: "simple-crm-react.firebaseapp.com",

    projectId: "simple-crm-react",

    storageBucket: "simple-crm-react.appspot.com",

    messagingSenderId: "187665634057",

    appId: "1:187665634057:web:efe81807a87ce1bd9cf9d8",

    measurementId: "G-DQQ09MMRY0",
});
const firestore = firebase.firestore();

export default firestore;