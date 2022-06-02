import { Signup } from './Components/Signup';
import React from "react";
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './Components/SplashScreen';
import LoginForm from './Components/LoginForm';
// import ReactDom from 'react-dom';
const App = () => {
  return <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/LoginForm" element={<LoginForm />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>
}

export default App;