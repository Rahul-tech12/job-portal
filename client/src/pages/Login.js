import React from "react";

const Login = () => {
  return (
    <div className="login">
      <h4>Login</h4>
      <form>
        <label>Email</label>
        <input placeholder="Enter your email" />
        <label>Password</label>
        <input placeholder="Enter your password" />
      </form>
      <button>
        <a href="/">Login</a>
      </button>
    </div>
  );
};

export default Login;
