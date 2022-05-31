import Signup from './Components/Signup';
import React from "react";
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './Components/SplashScreen';

function App() {
    // const Dashboard = () => (<Dashboard />)
    return (
        <Router>
          <div className="App">
            <Routes>
            <Route exact path="/" element={<SplashScreen />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </Router>
      );
    }


export default App;



// // eslint-disable-next-line 
// import LoginForm from "./Components/LoginForm.js";
// // eslint-disable-next-line 
// import UserStore from "./store/UserStore.js";
// // eslint-disable-next-line 
// import InputField from "./Components/InputField.js";
// // eslint-disable-next-line 
// import SubmitButton from "./Components/SubmitButton.js";
// import './App.css'


// import Navbar from "./Components/Navbar.js"

