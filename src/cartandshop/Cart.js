import React ,{ useContext , useState} from "react";
import Products from "../products1";
import  {Shopcontext} from "../shop-context";
const Cart = () => {

  const {removefromcart,cartitems}=useContext(Shopcontext);
   
  function Cartitem(props){
    return <div className="cartItem">
      <img src={props.img} />
      <div className="description">
        <p>{props.name}</p>
        <p>{props.price}</p>
        <button  onClick={()=>removefromcart(props.id)}>Remove from cart</button>
      </div>
      
    </div>
  }
  function buttonclick(){
    console.log(cartitems);
  }
  
  return (<div>
  <h1>your cart items</h1>
  {console.log(cartitems)}
  <button onClick={buttonclick}>button</button>
  
       {Products.map((product)=>
       {
        console.log(product.id);
        
        if(cartitems[product.id]!==0){
          return<Cartitem  id={product.id} img={product.img} name={product.name} price={product.price} />;
        }
        {/* else{
          return<Cartitem  id={product.id} img={product.img} name={product.name} price={product.price} />;

        } */}
        
       })}
       
  </div>
  
  );
  
};
export default Cart;

