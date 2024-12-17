import chefSVG from "./SVG/Chef.svg"
function Header(){
    return(
        <div className="header">
            <img className="svg" src={chefSVG} alt="Logo of man with chef hat"></img>
            <h1>Chef Man</h1>
        </div>
    )
}

export default Header;