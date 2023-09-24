import React, { useContext, useState } from "react";
import {MdOutlineCurrencyRupee} from "react-icons/md"
import  Product from "../products1";
import  {Shopcontext} from "../shop-context";
const Products = () => {
  // const[cartpageitems,setCartpageitems]=useState([]);
  // function addtocartpage(product){
  //   setCartpageitems(prevcartpageitems=>[...prevcartpageitems,product]);
  //   console.log(cartpageitems);
  // }
  
  const {addtocart,cartitems}=useContext(Shopcontext);

  function Createcard(product){
   return( <Card id={product.id} img={product.img} name={product.name} price={product.price} /*addtocartpage={()=>addtocartpage(product)} */ /*addtocartpage1={()=>addToCart(product)} */ />)
  }
  function Card(props){ 
    const cartitemamount=cartitems[props.id];
      return  <div class="product-card">
      <img class="product-img" src={props.img} alt="Product" />
      <div class="product-name" >{props.name}</div>
      <div class="product-price"><MdOutlineCurrencyRupee/>{props.price}</div>
    
      <button  onClick={()=>addtocart(props.id)}>Add to Cart {cartitemamount>0 ?cartitemamount :null} </button>
    </div> 
    }
    function buttonclick(){
      console.log(cartitems);
    }
    return(<>
    
        {Product.map(Createcard)}
        
         </>
      )

};



export default Products;
