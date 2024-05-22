import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAjNrsafiSFCV4STH0AlyxN3Gm-KcDWOKk",
  authDomain: "react-native-pilot-project.firebaseapp.com",
  projectId: "react-native-pilot-project",
  storageBucket: "react-native-pilot-project.appspot.com",
  messagingSenderId: "989262989919",
  appId: "1:989262989919:web:ad3e58981f609556dc29ea",
  measurementId: "G-HG55X5Y675",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
