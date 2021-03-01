import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6HD64tzX7xzIzJOSvPdpH5QozthAId0s",
  authDomain: "slack-build-63846.firebaseapp.com",
  projectId: "slack-build-63846",
  storageBucket: "slack-build-63846.appspot.com",
  messagingSenderId: "518060351277",
  appId: "1:518060351277:web:e4c0a197e298b98cd57da4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
