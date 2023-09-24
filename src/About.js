import React, { useContext, useState } from "react";
import  {Shopcontext} from "./shop-context";
  
const About = () => {
  const {addtocart,cartitems}=useContext(Shopcontext);
  function buttonclick(){
    console.log(cartitems);
  }
  return (<>
    <h1>About</h1>
    <button onClick={buttonclick}>+</button>
    
    </>
  )
}

export default About
