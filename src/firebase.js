// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWO9NyRa_X-sr0yO3fUxjWtTGVgKcNHKI",
  authDomain: "vanities-bbaff.firebaseapp.com",
  projectId: "vanities-bbaff",
  storageBucket: "vanities-bbaff.firebasestorage.app",
  messagingSenderId: "727898046459",
  appId: "1:727898046459:web:f51b335533adc101e6555e",
  measurementId: "G-M2CEDGBM2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);