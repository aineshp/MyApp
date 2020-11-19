import firebase from 'firebase';
require('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyAtC8L239TRWOSUkxQgkoPHPjWdwZ7_6yg",
    authDomain: "dadadadiapp.firebaseapp.com",
    databaseURL: "https://dadadadiapp.firebaseio.com",
    projectId: "dadadadiapp",
    storageBucket: "dadadadiapp.appspot.com",
    messagingSenderId: "478240330521",
    appId: "1:478240330521:web:4bf293f828293d24256b88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();