import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please Register Now!</h3>

      <form>
        <input type="text" placeholder="Your Name" />
        <br />
        <input type="email" placeholder="Enter Email" />
        <br />
        <input type="password" name="" placeholder="Password" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
