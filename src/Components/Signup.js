import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <div className="splash">
        Sign up
        <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="userEmail">Email</label>
        <input
          type="text"
          className="form-control"
          id="userEmail"
          name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="username">First Name</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="username">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Create Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="Password" />
          </div>
           <div className="form-group">
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="Password" />
      </div>
      <button type="submit" className="btn btn-primary"></button>
    </form>
  </div>
  </div>);
  }
}

export default Signup;