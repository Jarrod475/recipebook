import chefSVG from "./SVG/Chef.svg";

function Login(){
    return(
        <div className="login-page">
            <img className="svg" src={chefSVG} alt="Logo of man with chef hat"></img>
            <h1>Chef Man</h1>
            <button className="btn">Login with Google!</button>
        </div>
    )
}


export default Login;