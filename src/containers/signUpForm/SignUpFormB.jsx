import React, { useState } from "react";
import "./signUpForm.style.css";

const defaultUserData = {
  login: "",
  password: "",
};

const SignUpFormB = () => {
  const [userData, setUserData] = useState(defaultUserData);

  const onSubmitHandler = (e) => {
    console.log(userData);
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign up</h1>
        <form onSubmit={onSubmitHandler}>
          <label forHtml="login">Login</label>
          <input name="login" onChange={onChangeHandler} />
          <label forHtml="password">Password</label>
          <input name="password" onChange={onChangeHandler} />
          <br />
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpFormB;
