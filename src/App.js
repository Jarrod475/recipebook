import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Header from "./components/Header";
import Recipes from './components/recipes';
import LoginPage from './components/Loginpage';
import Showcase from './components/showcase';
import React,{useState} from 'react';

function App() {

const [pageState,setPageState] = useState(0);
const [activeRecipe, setActiveRecipe] = useState();

function viewRecipe(recipeData){
  setActiveRecipe(recipeData);
  setPageState(2);
}
function loginSuccess(){
  setPageState(1);
}

function renderPage(){
  if (pageState === 0){
    //login page
    return <LoginPage loginSuccess={loginSuccess}/>;
  }else if (pageState === 1){
    //recipe page
    return <Recipes view={viewRecipe}/> ;
  }else if (pageState === 2)
    {
      //recipe showcase
      return <Showcase recipeData={activeRecipe}/> 
    }
}




  return (
    <div className="App">
      <GoogleOAuthProvider clientId="1022244509768-97geajdtudjrotncr2urjmrdeuuqkmkv.apps.googleusercontent.com">
      <Header />
      {renderPage() } 
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
