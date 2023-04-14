import React  ,{useState}  from "react";
import "./App.css";
import Login_Form from "./Component/Login_Form";
import Home from "./Component/Home";


 


function App() {
   const[isLogin ,setIsLogin]=useState(true)
  
  const formsubmit =(isvaild)=>{
    
   setIsLogin(isvaild)
   
  }

   const logoutHandler =()=>{
    setIsLogin(true)
    console.log('k')
   }
  
  return (
       <div className="App">
         {isLogin===true ?  <Login_Form onSubmit={formsubmit}/> :<Home onlogout={logoutHandler}/>} 
         {/* <Home onlogout={logoutHandler}/> */}
           
           
        </div>
  );
}

export default App;
