import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Header from "./components/Header";
import Recipes from './components/recipes';
import LoginPage from './components/Loginpage';
import Showcase from './components/showcase';
import Create from './components/create';
import Edit from './components/edit'
import React,{useState} from 'react';

function App() {

const [pageState,setPageState] = useState(0);
const [activeRecipe, setActiveRecipe] = useState();

function viewRecipe(recipeData){
  setActiveRecipe(recipeData);
  setPageState(2);
}

function editRecipe(recipeData){
  setActiveRecipe(recipeData)
  setPageState(4);
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
    return <Recipes edit={editRecipe} addRecipe={setPageState} view={viewRecipe}/> ;
  }else if (pageState === 2){
      //recipe showcase
      return <Showcase setPage={setPageState} recipeData={activeRecipe}/> 
  }else if (pageState === 3){
    //add page
    return <Create setPage={setPageState}/>
  }else if (pageState === 4){
    //edit page
    return <Edit setPage={setPageState} currentRecipe={activeRecipe} />
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
