import chef from "./SVG/Chef.svg";
import trash from "./SVG/delete.svg";
import edit from "./SVG/edit.svg";

function Card(props){
    return(
        <div className="recipecard">
            <img className="svg" src={chef} alt="Picture of food" />
            <p>Name of recipe</p>
            <button><img className="button-svg" src={trash} /></button>
            <button><img className="button-svg" src={edit}/></button>
        </div>
    )       
}

export default Card;