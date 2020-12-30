import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpuu_AiuFMhAQRErEqy-LFgwf1fLt-0AQ",
  authDomain: "facebook-clone-2ea04.firebaseapp.com",
  databaseURL: "https://facebook-clone-2ea04.firebaseio.com",
  projectId: "facebook-clone-2ea04",
  storageBucket: "facebook-clone-2ea04.appspot.com",
  messagingSenderId: "146119721832",
  appId: "1:146119721832:web:d687e9647b2e8e726a8cdd",
  measurementId: "G-5T0VSB7PPX",
};

// connect our react frontend to our firebase backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
