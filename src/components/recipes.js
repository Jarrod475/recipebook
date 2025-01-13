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
    


    return(
        <div className="recipelist">
            {recipeList.length > 0 ? recipeList.map((recipe, index)=>
            {
                return <Card view={props.view} key={index} recipeData={recipe} />
            }): <p>No recipes :/</p>}
            <button onClick={()=>props.addRecipe(3)}><img className="button-svg" src={chefSVG} alt="add button" /></button>
        </div>
    )
}

export default List;