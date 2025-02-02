import React,{useState,useEffect} from 'react';
import edit from "./SVG/edit.svg"
import IngredientCard from "./ingredient.js";
import axios, { all } from 'axios';
import arrow from './SVG/LeftArrow.svg';

function Create(props){
   const [recipe, setRecipe] = useState({});
   const [recipeName,setName] = useState();
   const [ingredients, setIngredients] = useState([]);
   const [recipeInstruction, setInstruction] = useState("");
   
   //for the recipe name
   const handlenameChange = (event) => {
    const newValue = event.target.value;
    setName(newValue); 
};
    //functions for the ingredients
   function addIngredient(){
    setIngredients((prevValue)=>{
        const newArray = [...prevValue]
        newArray.push("");
        return newArray;
    })
   }

   function setnewIngredients(index,value){
    setIngredients((prevValue)=>{
        const newArray = [...prevValue]
        newArray[index] =value
        return newArray;
   
    });}

    function deleteIngredients(index){
        console.log(index);
        setIngredients((prevValue)=>{
            const newArray = [...prevValue];
            newArray.splice(index,1);
            return newArray;
        });
    }
    // for the instructions
    const handleInstructionChange = (event) => {
        const newValue = event.target.value;
        setInstruction(newValue); 
    };

    //this updates everytime the user makes a change
    //and stores the whole recipe as an object. 
    useEffect(()=>{
        const newRecipe = {
            Name : recipeName,
            Ingredients: [...ingredients],
            Instructions : recipeInstruction
        }
        console.log("recipe is now:", newRecipe);
        setRecipe(newRecipe);
    },[recipeName,recipeInstruction,ingredients])

    async function submitRecipe() {
        await axios.post('http://localhost:5000/add',recipe)
        .then(function (response){
            console.log(response);
            alert("Recipe has been added");
          })
        .catch(error => {
          console.error('Error:', error);
        });}

    return (<div className='input-page'>
        <button onClick={()=>props.setPage(1)} className='return-btn'><img className='button-svg' src={arrow} alt="back button"/></button>
        <h2>Create a new Recipe</h2>
        <p>name of the recipe</p>
        <input onChange={handlenameChange} value={recipeName}/>
        <p>Ingredients</p>
        <ol>
        {ingredients.map((ingredient,index)=>{return <IngredientCard key={index} Ingredient={ingredient} ingredientPos={index} deleteIngredient={deleteIngredients} setIngredient={setnewIngredients} />})}
        </ol>
        <button onClick={addIngredient}><img className="button-svg" src={edit} alt='add button' /></button>
        <p>Instructions</p>
        <input onChange={handleInstructionChange} value={recipeInstruction}/> <br/> 
        <button onClick={submitRecipe}>Submit!</button>
    </div>);

}
export default Create;