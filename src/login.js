import React, { useState,useContext,createContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from "./header"
import { Hicontext } from "./App";
import { CountContext } from './App';
export const UserContext = createContext();

//import { useContext } from "react";
const Login = () => {
  const hi=useContext(Hicontext);
    const[email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const {user, setuser}= useContext(CountContext)

    const navigate = useNavigate();
    function Updateuser(username){
      console.log("updating"+username);
      setuser(username);
      // useEffect(() => {
      //   console.log("User has been updated:", user);
      // }, [user]);
    }
    
 
   const HandleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8001/login', {
        email: email,
        password: password,
      })
      .then(res=>{
        console.log('Response from server:', res.data);
         if(res.data.message==="successful login"){
          alert("successful login");
          const loggedinuser=res.data.username;
          console.log(loggedinuser);
          Updateuser(loggedinuser);
          // setuser({loggedinuser});
          // alert(user);
          // console.log(user);
          // console.log(user);
          // useEffect(() => {
          //   console.log(user); // This will log the updated user when it's available.
          // }, [user]);
          navigate("/products");
         }
         else if(res.data==="wrong password"){
          alert("entered password is wrong");
          navigate("/login");
         }
         else if(res.data==="new email"){
          alert("mail not registered");
          navigate("/login");
         }
      })
      
      // console.log(user);

      // Handle the response from the server here
     
    } catch (error) {
      // Handle errors, show error messages, etc.
     // console.error('Error:', error);
    }
      //  useEffect(() => {
      //        console.log(user); // This will log the updated user when it's available.
      //     }, [user]);
  };
    const handlesignuppage = () => {
        navigate('/signup'); // Navigate to the "/product" page
      };
      
    return (
      <>
       <h1>{hi}</h1>
    <div className="login-container">
    <h2 className="login-title">Login Page</h2>
      <form className="login-form" action="POST">
       <div>
        <input className='email' onChange={(e)=>{ setemail(e.target.value) }} type="email" name="email" placeholder='Email' required />
        </div>
        <div>
        <input className="password" onChange={(e)=>{ setpassword(e.target.value) }}  type="password" name="password" placeholder='Password'  required/>
        </div>
        <div className='loginbutton'>
        <button type='submit'  onClick={HandleLogin}> LOGIN</button>
        </div>
        </form>
        <div class="bottom">
        <h5>Not a memeber yet?</h5>
       <button onClick={handlesignuppage} > Signup</button>
       </div>
       {/* <UserContext.Provider value={user}>{/* Provide user context */}
     {/*  </div> <Header />
      </UserContext.Provider> */}
    </div>
    </>
  )
}

export default Login;