import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCkQOGrD7LSJxxP8xSqf7RSHqev3JWR7Mk",
  authDomain: "lab2client.firebaseapp.com",
  projectId: "lab2client",
  storageBucket: "lab2client.appspot.com",
  messagingSenderId: "954423116956",
  appId: "1:954423116956:web:4a1f4a44402808b4149959",
  measurementId: "G-9YQ5VVPW4K"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;