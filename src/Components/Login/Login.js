import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const Login = ({ setUser }) => {
  const signin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="login">
        <div className="login__container">
          <img
            className="logo1"
            src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png"
            alt="logo"
          />
          <h1>Make the most of your professional life</h1>
        </div>
        <div className="google">
          <button onClick={signin}>
            <img
              className="logo2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
              alt="logo"
            />
            <h3>Continue with Google</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
