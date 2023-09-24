import React ,{useContext}from 'react'
import { UserContext } from './login';
import { Hicontext } from './App';
import { FaShoppingCart } from 'react-icons/fa';
const Header = () => {
   const hi=useContext(Hicontext);
   const   a=false;
   const b={hi};
   // if (b.hi === 'hi') {
   //    a = true;
   //  }
   //const user = useContext(UserContext);
  return (

     <nav class="navhref">
     
         <a href="/" >Home</a>
        <a href="/abouts">About</a>
        <a href="/contacts">Contact</a>
        
        <a href="/Products">Shop</a>
       
      { a? (<h1>{hi}</h1> ):(<a href="/login">Login</a>)  }
        <a href="/carts"><FaShoppingCart/></a>
      
        
     </nav>

  )
}


export default Header;