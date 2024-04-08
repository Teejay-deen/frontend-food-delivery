import React, { useState } from "react";
import "./LogingPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const Login = "Login";
  const signUp = "Sign-Up";
  const [currState, setCurrState] = useState(signUp);
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-input">
          {currState === Login ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="pasword" placeholder="Your Password" required />
        </div>

        <button>
          {currState === signUp ? "Create an account" : "Login here! "}
        </button>
        <div className="\">
          <input type="checkbox" required />
          <p>Bu Continuing, i agree to the term of use & privacy policy</p>
        </div>

        {currState === Login ? (
          <p>
            Create new account ?{" "}
            <span onClick={() => setCurrState(signUp)}>Click here!</span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span onClick={() => setCurrState(Login)}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
