import React from "react";

 const cartItems = [];

export function addToCart(product) {
    console.log("clicked");
  cartItems.push(product);
  console.log(cartItems);
//   const[cartpageitems,setCartpageitems]=useState([]);
//   function addtocartpage(product){
//     setCartpageitems(prevcartpageitems=>[...prevcartpageitems,product]);
//     console.log(cartpageitems);
//   }
}
export default cartItems;