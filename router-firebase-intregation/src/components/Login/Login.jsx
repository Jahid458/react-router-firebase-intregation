import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase";
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/"

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(() =>{
        navigate(from,{replace:true})
    })
  
  }


  return (
    <div>
      <h1>Please LogIn</h1>
      <div style={{ margin: "20px" }}>
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      </div>

      <form>
        <input type="text" placeholder="Your Name" />
        <br />
        <input type="email" placeholder="Enter Email" />
        <br />
        <input type="password" name="" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
