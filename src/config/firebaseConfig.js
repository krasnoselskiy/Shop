import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyBG7ctYxoF_6LDlqNRo-FzV9j_-YEkkzyw",
  authDomain: "simple-shop-b5fc8.firebaseapp.com",
  databaseURL: "https://simple-shop-b5fc8.firebaseio.com",
  projectId: "simple-shop-b5fc8",
  storageBucket: "simple-shop-b5fc8.appspot.com",
  messagingSenderId: "857285455698",
  appId: "1:857285455698:web:62f77016760a992a"
};

export const fb = firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

// export const ref = firebase.database().ref();
export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;
