import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Header from "./components/Header";
import Recipes from './components/recipes';
import LoginPage from './components/Loginpage';
import React,{useState} from 'react';

function App() {

const [isLoggedIn,setLogIn] = useState(false);
function loginSuccess(){
  setLogIn(true);
}
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="1022244509768-97geajdtudjrotncr2urjmrdeuuqkmkv.apps.googleusercontent.com">
      <Header />
      {isLoggedIn?<Recipes />: <LoginPage loginSuccess={loginSuccess}/> } 
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
