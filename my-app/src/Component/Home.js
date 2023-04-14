import "./Home.css";
function Home(props){
    return(
        <div>
        
              <h1  >
                YOU ARE LOGIN <br/>
              </h1>
                <button className="button" onClick={props.onlogout}>Logout</button>
        </div>
    )
}
export default Home;