import React, { useState, useReducer, useEffect } from "react";
//import Home from "./Home"
import "./Login_form.css";
const nameReducer = (state, action) => {
  if (action.type === "name") {
    return { value: action.val, isvail: action.val.trim() === "" };
  }
  if (action.type === "nameBlur") {
    return { value: state.value, isvail: state.value.trim() === "" };
  }
};
const emailReducer = (state,action)=>{
  if(action.type==='email'){
    return{value:action.val , isvaild:action.val.includes("@")}
  }
  if(action.type==='emailBlur'){
    return{value:state.value ,  isvaild:state.value.includes("@")}
  }

}
 const passwardReducer =(state,action)=>{
    if(action.type==='passward'){
      return{value:action.val , isvaild:action.val.length >=6}
    }
    if(action.type==="passwardBlur"){
      return{value:state.value ,isvaild:state.value.length>=6}
    }
   
 }
 


function Login_Form(props) {
   const[rePassward ,setRePassward]=useState('');
   const[rePasswardVaild ,setRePassWardVaild] = useState(null);
   const[checked ,setChecked]= useState(false)

    const[formIsVaild ,setformIsVaild]=useState(true);
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isvail: null,
  });
    const[emailState ,dispatchEmail] =useReducer(emailReducer ,{
    value:'',
    isvaild:null
  })
    const[passwordState ,dispatchPassward]=useReducer(passwardReducer ,{
    value:"",
    isvaild:null
  })

  const nameChangeHandler = (e) => {
    dispatchName({ type: "name", val: e.target.value });
  };
  const nameBlueHandler = () => {
    dispatchName({ type: "nameBlur" });
  };
  const emailChangeHandler =(e)=>{
    dispatchEmail({type:'email' ,val:e.target.value})
  }
  const emailBlur =()=>{
    dispatchEmail({type:"emailBlur"})
  }
  const passwardChangeHandler= (e)=>{
    dispatchPassward({type:"passward" ,val:e.target.value})
  }

  const passwardBlur =()=>{
    dispatchPassward({type:"passwardBlur"})
  }
  const rePasswardChangeHandler =(e)=>{
    setRePassward(e.target.value)

  }
 
  const rePasswardBlur =()=>{
    if(rePassward===passwordState.value){
      if(passwordState.value===rePassward)
      { setRePassWardVaild(true )
      }
     
    
    }else{
      setRePassWardVaild(false)
    }
  }
  const checkedHandler =(e)=>{
    setChecked(e.target.checked)
  }
  const nameclass = nameState.isvail ? "invaild" : "Text_input";
   const classbtn =formIsVaild ===true ?'Disabled':'button'
  
 
  
   
  
    useEffect(()=>{
      if(nameState.isvail ===false && emailState.isvaild ===true && passwordState.isvaild===true &&rePasswardVaild ===true && checked==true){

        setformIsVaild(false)
      }
    } ,[nameState.isvail ,emailState.isvaild ,passwordState.isvaild ,rePasswardVaild ,checked])

    const formSubmitHandler=(event)=>{
      event.preventDefault()
      props.onSubmit(formIsVaild)
    }
  return (
    <>
      <form className="form_control " onSubmit={formSubmitHandler}>
        <h2 className="login_form_heading">Register</h2>

        <input
          className={nameclass}
          type="text"
          name="name"
          value={nameState.value}
          onChange={nameChangeHandler}
          onBlur={nameBlueHandler}
          placeholder="Name"
        />
        {nameState.isvail && (
          <p className="error_text">Please enter your name</p>
        )}

        <input
          className={ `${'Text_input'} ${emailState.isvaild=== false ? 'invaild' :""} `}
          type="email"
          name="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={emailBlur}
          placeholder="Email"
        />
           {emailState.isvaild ===false ? <p className="error_text">Please enter your vaild Email</p> :""}


        <input
          className={`${'Text_input'} ${passwordState.isvaild=== false ? 'invaild' :""} `}
          type="password"
          name="password"
          value={passwordState.value}
          onChange={passwardChangeHandler}
          onBlur={passwardBlur}
          placeholder="Password"
        />
        {  passwordState.isvaild ===false? <p className="error_text">Please enter 6-digit Passward</p>:""}

        <input
          className={`${'Text_input'} ${rePassward=== false ? 'invaild' :""} `}
          type="password"
          name="passwordRepeat"
          value={rePassward}
          onChange={rePasswardChangeHandler}
          onBlur={rePasswardBlur}
          placeholder="Password Repeat"
        />
        {rePasswardVaild=== false ?  <p className="error_text">Your  Passward did't match</p>:""}

        <label className="checkBoxLabel">
          <input type="checkbox" className="checkbox" name="termsAccepts" value={checked} onChange={checkedHandler} />
          Accept Terms Of us{" "}
        </label> 
        <button className={classbtn} disabled={formIsVaild }>Register</button>
      </form>

      {/* </div> */}
    </>
  );
}
export default Login_Form;
