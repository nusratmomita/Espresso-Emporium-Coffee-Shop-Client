
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMVtRH8fcas8isZ2-zLbwwtp2AXzwVOEU",
  authDomain: "espresso-emporium-fb910.firebaseapp.com",
  projectId: "espresso-emporium-fb910",
  storageBucket: "espresso-emporium-fb910.firebasestorage.app",
  messagingSenderId: "910303362014",
  appId: "1:910303362014:web:326fce92df963e390dbb4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);