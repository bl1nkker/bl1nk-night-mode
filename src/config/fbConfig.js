import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyABNxs08wMRE4Ysews0Rnj6BGqXHyQVi4U",
    authDomain: "mario-plan-e9984.firebaseapp.com",
    projectId: "mario-plan-e9984",
    storageBucket: "mario-plan-e9984.appspot.com",
    messagingSenderId: "702282789432",
    appId: "1:702282789432:web:9d00be7bc6d9af1e4f6ccd",
    measurementId: "G-LQXM00N7WG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.firestore().settings({timestampsInSnaphots:true})

  export default firebase