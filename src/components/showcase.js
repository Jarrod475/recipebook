import arrow from './SVG/LeftArrow.svg';
function showcase(props){
    console.log(props.recipeData);
return <div>
    <button onClick={()=>props.setPage(1)} className='return-btn'>
        <img className='button-svg' src={arrow} alt="back button"/>
    </button>
    <a src="" alt="Picture of food" />
    <h1>{props.recipeData.name}</h1>
    <ul>{props.recipeData.ingredients.map((ingredient)=>{return<li>{ingredient}</li>})}</ul>
    <p>{props.recipeData.instructions}</p>
</div> ;
}

export default showcase;