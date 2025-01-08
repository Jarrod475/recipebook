function showcase(props){
    console.log(props.recipeData);
return <div>
    <a src="" alt="Picture of food" />
    <h1>{props.recipeData.name}</h1>
    <ul>{props.recipeData.ingredients.map((ingredient)=>{return<li>{ingredient}</li>})}</ul>
    <p>{props.recipeData.instructions}</p>
</div> ;
}

export default showcase;