// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhWVyJ0flf7gpZtmbhf9Kj1yopxwlaMmo",
  authDomain: "nojmo-site.firebaseapp.com",
  projectId: "nojmo-site",
  storageBucket: "nojmo-site.appspot.com",
  messagingSenderId: "1081785539577",
  appId: "1:1081785539577:web:c33bfdff8c0abdb7137b28"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
