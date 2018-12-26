import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyANTkZHb8v4n5Gn9GZy2IBAZDghAprg3c8",
  authDomain: "marioplan-9d8ac.firebaseapp.com",
  databaseURL: "https://marioplan-9d8ac.firebaseio.com",
  projectId: "marioplan-9d8ac",
  storageBucket: "marioplan-9d8ac.appspot.com",
  messagingSenderId: "578689905107"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;