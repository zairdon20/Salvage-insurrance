import React from 'react'
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

const Main = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      document.getElementById("loop").innerText = "logged in"
    } else {
      document.getElementById("loop").innerText = "No logged in"
    }
  })

  return (
    <div id='loop'>
      Hello world!
    </div>
  )
}

export default Main