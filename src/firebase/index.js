import  firebase from "firebase";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC6RBAHkPD6AWN1R_UyogBSSmTEZ4FIxe4",
    authDomain: "bige-academy.firebaseapp.com",
    projectId: "bige-academy",
    storageBucket: "bige-academy.appspot.com",
    messagingSenderId: "196689640354",
    appId: "1:196689640354:web:3d5ee01831531c7164d0fb",
    measurementId: "G-TV2W8K9WJL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  export const auth = firebase.auth() 
  export const fs = firebase.firestore() 
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()