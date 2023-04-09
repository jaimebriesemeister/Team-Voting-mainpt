import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCHfyOLoylj7Tl_jbumSjCGN8iNzOBRMg0",
    authDomain: "teamdojobis.firebaseapp.com",
    databaseURL: "https://teamdojobis-default-rtdb.firebaseio.com",
    projectId: "teamdojobis",
    storageBucket: "teamdojobis.appspot.com",
    messagingSenderId: "826577032399",
    appId: "1:826577032399:web:abe94f73d32e57630613ba"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();