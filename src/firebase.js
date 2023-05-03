// import { initializeApp } from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdW4oWllpQBOOz7mrZ06fY3UcAN3ESMDo",
    authDomain: "twitter-clone-c7927.firebaseapp.com",
    projectId: "twitter-clone-c7927",
    storageBucket: "twitter-clone-c7927.appspot.com",
    messagingSenderId: "682710967177",
    appId: "1:682710967177:web:46d204fcea5c9a7b28f758",
    measurementId: "G-7T4C5GTZ3S"
  };

  //EvhufD5w0bxxkxgZfZYa

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db =firebaseApp.firestore()
  //const db =initializeApp(firebaseConfig);
  export default db;