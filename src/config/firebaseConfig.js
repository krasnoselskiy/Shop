import firebase from '@firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';
import 'firebase/storage';

require('firebase/firestore');

const config = {
  apiKey: 'AIzaSyBG7ctYxoF_6LDlqNRo-FzV9j_-YEkkzyw',
  authDomain: 'simple-shop-b5fc8.firebaseapp.com',
  projectId: 'simple-shop-b5fc8'
};

// export const fb = firebase.initializeApp(config);

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
    alert(error);
  });
}

// export const ref = firebase.database().ref();
export const fb = firebase.initializeApp(config);
export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;
