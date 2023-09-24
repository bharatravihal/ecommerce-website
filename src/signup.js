import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Signup = () => {
    const[email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [username,setusername]=useState('');

    const navigate = useNavigate();
 
   const handlesignup = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8001/signup', {
        email: email,
        password: password,
        username:username
      })
      .then(res=>{
        console.log('Response from server:', res.data);
        if(res.data==="User already exists"){
          alert("email is already taken");
          //navigate("/abouts");
        }
        else if(res.data==="successful signup"){
          alert("successfully registered");
        }
        else if(res.data==="error"){
          alert("error occured");
        }
      })

      // Handle the response from the server here
     
    } catch (error) {
      // Handle errors, show error messages, etc.
      console.error('Error:', error);
    }
  };
    const handleloginpage = () => {
        navigate('/login'); // Navigate to the "/product" page
      };
      
    return (
    <div className='login-container'>
    <h2 className="login-title">Signup Page</h2>
    <form className="login-form" action="POST">
    <div>
       <input className="email" onChange={(e)=>{setusername(e.target.value)}} text="username" name="username" placeholder='Username' />
        </div>
        <div>
             <input className='email' onChange={(e)=>{ setemail(e.target.value) }} text="email" name="email" placeholder='Email' required />
             </div>
       <div>
        <input className=" password" onChange={(e)=>{ setpassword(e.target.value) }}  type="password" name="password" placeholder='Password'  required/>
        </div>
        <div classname="loginbutton">
        <button type='submit'  onClick={handlesignup}> Signup</button>
        </div>
        </form>
        <div className='bottom'>
        <h5>Already a memeber?</h5>
       <button onClick={handleloginpage} >Login</button>
    </div>
    <h4>Hashing Used - Ensuring Data Security through Cryptographic Techniques.</h4>
    </div>
  )
}

export default Signup;