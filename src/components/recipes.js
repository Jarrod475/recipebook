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
    
    function deleteData(id){    
        axios.delete('http://localhost:5000/delete',{data :{recipeID : id}})
        .then( ()=>{
            //this doesnt work! you arent looping through each ID, since each ID is stored in a different object.
            var index = recipeList.indexOf(id);
            console.log("index is : ",index);
            if (index !== -1) {
                setRecipeList((prevValue)=>{
                    const newArray = [...prevValue];
                    newArray.splice(index, 1);
                    return newArray;
                });
            }
        })
    }
    


    return(
        <div className="recipelist">
            {recipeList.length > 0 ? recipeList.map((recipe, index)=>
            {
                return <Card delete={deleteData} view={props.view} key={index} recipeData={recipe} />
            }): <p>No recipes :/</p>}
            <button onClick={()=>props.addRecipe(3)}><img className="button-svg" src={chefSVG} alt="add button" /></button>
        </div>
    )
}

export default List;