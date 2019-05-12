// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDbHhfCP1K5Yz6xfRwh0rc62AiL5JCSN60",
  authDomain: "proyecto-jati.firebaseapp.com",
  databaseURL: "https://proyecto-jati.firebaseio.com",
  projectId: "proyecto-jati",
  storageBucket: "proyecto-jati.appspot.com",
  messagingSenderId: "578783677861",
  appId: "1:578783677861:web:c8d1006377586b3a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
