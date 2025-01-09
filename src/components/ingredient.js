import React,{ useState, useEffect} from "react";
import trash from "./SVG/delete.svg";

function Ingredient(props)
{
    
    const [inputValue,setValue]= useState("");

    //sets the value to the assigned value if there is one.
    useEffect(() => {
        if (props.Ingredient !== inputValue) {
            setValue(props.Ingredient);
        }
    }, [props.Ingredient]);
    //** interesting info :
    //Since setValue is asynchronous,
    //relying on inputValue immediately after calling setValue can lead to stale data.
    //  Directly using newValue ensures you're always working with the current input.
    const handleChange = (event) => {
        const newValue = event.target.value;
        //this is asynchronous
        setValue(newValue); 
        //** thus this line here!
        props.setIngredient(props.ingredientPos, newValue); 
    };

    return(<div>
        <input onChange={handleChange} value={inputValue}/>
        <button onClick={()=>{props.deleteIngredient(props.ingredientPos)}}><img className="button-svg" src={trash} alt="delete button"/></button>
    </div>)
}

export default Ingredient;