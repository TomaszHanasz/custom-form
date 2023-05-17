import "./signUpForm.style.css";

import React, { useState } from "react";

const defaultUserData = {
  login: "",
  password: "",
};

const SignUpFormCopy = () => {
  const [formData, setFormData] = useState(defaultUserData);

  const onSubmitHandler = (e) => {
    console.log(formData);
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Please sign in:</h1>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="login">Login:</label>
          <input name="login" onChange={onChangeHandler} />
          <label htmlFor="password">Password:</label>
          <input name="password" onChange={onChangeHandler} />
          <br />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpFormCopy;
