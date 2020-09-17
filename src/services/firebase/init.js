import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCvYg2gogAQOhszFhmxF11dJq8iGRE2TlA",
  authDomain: "snack-1.firebaseapp.com",
  databaseURL: "https://snack-1.firebaseio.com",
  projectId: "snack-1",
  storageBucket: "snack-1.appspot.com",
  messagingSenderId: "643875508878",
  appId: "1:643875508878:web:f54fe0a45b173074fd6fdf",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
