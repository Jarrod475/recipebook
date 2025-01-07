import Card from "./card";
import React,{ useEffect,useState} from 'react';
import axios from 'axios';



function List(){
    const [recipeList, setRecipeList] = useState();

    //using the 'useEffect' hook to run this one the recipe component loads up
    useEffect(() => {
        axios.get('http://localhost:5000/recipes').then(response => 
        {
       setRecipeList(response.data.recipes);
       console.log(response.data.recipes);
        })
        }, []);
    

    return(
        <div className="recipelist">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default List;