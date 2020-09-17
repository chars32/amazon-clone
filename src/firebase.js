import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDe8yAo7b_JRr6p0yl9DdxyW5G6ttJLZkc",
  authDomain: "clone-96ac2.firebaseapp.com",
  databaseURL: "https://clone-96ac2.firebaseio.com",
  projectId: "clone-96ac2",
  storageBucket: "clone-96ac2.appspot.com",
  messagingSenderId: "394313627294",
  appId: "1:394313627294:web:e324e22b5c0be0653ced8f",
  measurementId: "G-R4E6132R4V",
};

// Init firebaseApp
const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Init db and auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

export default firebaseApp;
