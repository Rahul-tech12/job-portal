import React from "react";

const Register = () => {
  return (
    <div className="register">
      <h4>Register</h4>
      <form>
        <label>Full name</label>
        <input placeholder="Enter your name" />
        <label>Email</label>
        <input placeholder="Enter your email" />
        <label>Password</label>
        <input placeholder="Enter your password" />
        <label>Contact no</label>
        <input placeholder="Enter your no" />
        <label>Work status</label>
        <select>
          <option>Job search</option>
          <option>Recruiter</option>
        </select>
        <button>
          <a href="/login">Register</a>
        </button>
      </form>
    </div>
  );
};

export default Register;
