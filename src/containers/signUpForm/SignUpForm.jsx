import React, { useState } from "react";
import "./signUpForm.style.css";

const defaultFormData = {
  displayName: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const onChangeHandler = (e) => {
    console.log(e.target.name, ":", e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); //doesnt refresh the page automatically
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Please sign up:</h1>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="displayName">Display Name</label>
          <input
            name="displayName"
            onChange={onChangeHandler}
            value={formData.displayName}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={onChangeHandler}
            value={formData.password}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            onChange={onChangeHandler}
            value={formData.confirmPassword}
          />
          <br />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
