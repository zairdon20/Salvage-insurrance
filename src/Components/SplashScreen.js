import React from "react";
import { useNavigate } from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApsiaVOhugNwoTQFEeT87BTGQXajMo4so",
  authDomain: "salvage-insurance.firebaseapp.com",
  projectId: "salvage-insurance",
  storageBucket: "salvage-insurance.appspot.com",
  messagingSenderId: "788263947850",
  appId: "1:788263947850:web:0c544d11b7dd372180e0b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const Splash = () => {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate('/Dashboard');
    } else {
      navigate('/LoginForm');
    }
  })
}


export default Splash;