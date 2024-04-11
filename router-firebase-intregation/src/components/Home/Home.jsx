import { getAuth } from "firebase/auth";
import React from "react";

import {useAuthState} from 'react-firebase-hooks/auth';
import app from "../../firebase";


const auth = getAuth(app);  

const Home = () => {
  

  const [user] = useAuthState(auth)

  return (
    <div>
      <h2>This is Home</h2>
      <h3>Current User Is {user? user.displayName: 'No body'}</h3>
    </div>
  );
};

export default Home;
