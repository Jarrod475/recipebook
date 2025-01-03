import React from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import chefSVG from "./SVG/Chef.svg";

const LoginPage = () => {
    //this send the token to the back end for verification.
    async function postToken(idToken) {
      await axios.post('http://localhost:5000/auth',{
        token : idToken
      }).then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });}

      //if the login to google was successful
  const handleLoginSuccess = (credentialResponse) => {
    const idToken = credentialResponse.credential; // This is the JWT (ID token)
    console.log("Google ID Token is:", idToken);
    postToken(idToken);
  };
//if the login to google was not successful
  const handleLoginError = () => {
    console.error("Google Login Failed");
  };

  return (
    <div className='login-page'>
      <img className="svg" src={chefSVG} alt="Logo of man with chef hat"></img>
      <h1>Chef Man</h1>
      <GoogleLogin 
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </div>
  );
};

export default LoginPage;