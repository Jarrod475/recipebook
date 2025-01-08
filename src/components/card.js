import chef from "./SVG/Chef.svg";
import trash from "./SVG/delete.svg";
import edit from "./SVG/edit.svg";
import hat from "./SVG/chef-hat.svg"

function Card(props){
    return(
        <div className="recipecard">
            <img className="svg" src={chef} alt="Picture of food" />
            <p>{props.recipeData.name}</p>
            <button><img className="button-svg" src={trash} /></button>
            <button><img className="button-svg" src={edit}/></button>
            <button><img onClick={ () =>{props.view(props.recipeData)}} className="button-svg" src={hat}/></button>
        </div>
    )       
}

export default Card;