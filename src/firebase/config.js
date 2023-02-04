import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvRLVXrcuZCTPdZvt9wpDFjHf9KuuVfHU",
  authDomain: "projectmanagementsite-d8a50.firebaseapp.com",
  projectId: "projectmanagementsite-d8a50",
  storageBucket: "projectmanagementsite-d8a50.appspot.com",
  messagingSenderId: "269767423108",
  appId: "1:269767423108:web:376d7f90df36a2d7e6fed1",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
