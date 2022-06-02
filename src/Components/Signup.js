import React from "react";

import { useNavigate } from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

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

export const Signup = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value
    const cPassword = e.target[2].value

    if (password === cPassword) {
      createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(() => {
        navigate("/Dashboard")
      }).catch((e) => {
        alert(e.message)
      })
    } else {
      alert("Invalid assword!")
    }
  }

  return <div className="LoginForm">
    <h1>Signup</h1>

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Email</label>
        <input
          type="text"
          className="form-control"
          name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          name="password" />
      </div>
      <button type="submit" className="btn btn-primary"></button>
    </form>
  </div>
}

export default Signup;