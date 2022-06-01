import React from "react";


export const Signup = () => {
  
    return <div className="LoginForm">
    <h1>Signup</h1>

    <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password" />
      </div>
      <button type="submit" className="btn btn-primary"></button>
    </form>
  </div>
}

export default Signup;