import React from "react";
// eslint-disable-next-line 
import LoginForm from "./Components/LoginForm.js";
// eslint-disable-next-line 
import UserStore from "./store/UserStore.js";
// eslint-disable-next-line 
import InputField from "./Components/InputField.js";
// eslint-disable-next-line 
import SubmitButton from "./Components/SubmitButton.js";
import './App.css'
// import Navbar from "./Components/Navbar.js"

class App extends React.Component {
  async componentDidMount() {
   try {
     // eslint-disable-next-line 
      let response = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();

      if (result && result.isLoggedIn) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
          isLoggedIn: false
        });

        }
        catch (e) {{  
   }
  
  }
  render() {
    return (
      <div className="app">
       Hello World
        {/* <Navbar /> */}
        <UserStore />
      </div>
    );
  }
} 

export default App;