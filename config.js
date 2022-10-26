import firebase from 'firebase';

// adicione SDK do Firebase


var firebaseConfig = {
    apiKey: "AIzaSyCpY_kHbjR0QmXw9bcDPMEXtrRAHyxkfxA",
    authDomain: "team-42ffe.firebaseapp.com",
    databaseURL: "https://team-42ffe-default-rtdb.firebaseio.com",
    projectId: "team-42ffe",
    storageBucket: "team-42ffe.appspot.com",
    messagingSenderId: "117934924157",
    appId: "1:117934924157:web:bc935c190b3a7353136c14",
    measurementId: "G-XHMVKTBN9Z"
  };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();