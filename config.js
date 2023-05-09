import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDupo8lNIzlMnGpMCCHRt3cdP7y9rEDBuc",
  authDomain: "votacao-em-equipe-bd4fb.firebaseapp.com",
  databaseURL: "https://votacao-em-equipe-bd4fb-default-rtdb.firebaseio.com",
  projectId: "votacao-em-equipe-bd4fb",
  storageBucket: "votacao-em-equipe-bd4fb.appspot.com",
  messagingSenderId: "914964388774",
  appId: "1:914964388774:web:726a6d326fe1e575450d67"


};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
