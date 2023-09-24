import React,{createContext, useState,useEffect} from "react";
import products from "./products1";
export const Shopcontext=createContext(null);


const getdefaultcart=()=>{
    let cart={}
    for(var i=1;i<products.length+1;i++){
       cart[i]=0;
    }
    return cart;
}

export function Shopcontextprovider(props){
    const[cartitems,setcartitems]=useState(getdefaultcart());
    const addtocart=(itemid)=>{
        setcartitems((prev) =>({...prev,[itemid]:prev[itemid]+1}));
        
    }
    const removefromcart=(itemid)=>{
        setcartitems((prev) =>({...prev,[itemid]:prev[itemid]-1}));
    }
    const contextvalue={cartitems,addtocart,removefromcart}
    console.log(cartitems);
return (<Shopcontext.Provider value={contextvalue}>
{props.children}
</Shopcontext.Provider>)
}