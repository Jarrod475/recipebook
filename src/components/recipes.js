import Card from "./card";
import React,{ useEffect,useState} from 'react';
import axios from 'axios';
import chefSVG from "./SVG/Chef.svg";



function List(props){
    const [recipeList, setRecipeList] = useState([]);

    //using the 'useEffect' hook to run this once the recipe component loads up
    useEffect(() => {
        axios.get('http://localhost:5000/recipes').then(response => 
        {
       setRecipeList(response.data.recipes);
       console.log(response.data.recipes);
        })
        }, []);
    
    async function deleteData(id){    
       await axios.delete('http://localhost:5000/delete',{data :{recipeID : id}})
        .then(response =>{
           console.log(response.message);
           axios.get('http://localhost:5000/recipes').then(response => 
            {
           setRecipeList(response.data.recipes);
           console.log(response.data.recipes);
            })
        })
    }
    


    return(
        <div className="recipelist">
            {recipeList.length > 0 ? recipeList.map((recipe, index)=>
            {
                return <Card delete={deleteData} view={props.view} key={index} recipeData={recipe} />
            }): <p>No recipes :/</p>}
            <button className="create-btn" onClick={()=>props.addRecipe(3)}>
                <img className="button-svg" src={chefSVG} alt="add button" />
                <p>Create New Recipe</p>
            </button>
        </div>
    )
}

export default List;