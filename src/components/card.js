import chef from "./SVG/Chef.svg";
import trash from "./SVG/delete.svg";
import edit from "./SVG/edit.svg";
import hat from "./SVG/chef-hat.svg"

function Card(props){

    function onDelete(){
        props.delete(props.recipeData.id);
    }

    return(
        <div className="recipecard">
            <img className="svg" src={chef} alt="Picture of food" />
            <p>{props.recipeData.name}</p>
            <button><img onClick={onDelete} className="button-svg" src={trash} /></button>
            <button><img onClick={() =>{props.edit(props.recipeData)}} className="button-svg" src={edit}/></button>
            <button><img onClick={ () =>{props.view(props.recipeData)}} className="button-svg" src={hat} alt="view"/></button>
        </div>
    )       
}

export default Card;