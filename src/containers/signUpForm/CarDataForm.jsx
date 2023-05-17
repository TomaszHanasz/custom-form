import React, { useState } from "react";
import "./signUpForm.style.css";

const carData = {
  brand: "",
  model: "",
  year: "",
};

const CarDataForm = () => {
  const [userCarData, setUserCarData] = useState(carData);

  const onSubmitHandler = (e) => {
    console.log(userCarData);
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setUserCarData({ ...userCarData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Enter car data</h1>
        <form onSubmit={onSubmitHandler}>
          <label forHtml="brand">Brand:</label>
          <input name="brand" onChange={onChangeHandler} />
          <label forHtml="model">Model:</label>
          <input name="model" onChange={onChangeHandler} />
          <label forHtml="year">Year:</label>
          <input name="year" onChange={onChangeHandler} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CarDataForm;
