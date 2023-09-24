import React ,{useContext, useState} from "react";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Home from "./Home";
import Abouts from "./About";
import Products from "./cartandshop/Products";
import Contacts from "./Contact";
import Carts from "./cartandshop/Cart";
import SingleProduct from "./SingleProduct";
import Login from "./login"
import Error from "./error";
import Signup from "./signup"

import Header from "./header";
 import { Shopcontextprovider } from "./shop-context";
 export const Hicontext=React.createContext();
export const CountContext=React.createContext();
export const CountProvider=({children})=>{
  const[user,setuser]=useState(null);
  return(
    <CountContext.Provider value={{user,setuser}}>
      {children}
    </CountContext.Provider>
  );
};
const App = () => {
 
  return (
  <div>
  <Shopcontextprovider >
  <Hicontext.Provider value={'hi'}>
  <Router>
  <CountProvider>
  <Header/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/abouts" element={<Abouts/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/carts" element={<Carts/>} />
  <Route path="/contacts" element={<Contacts/>}/> 
  <Route path="/login" element={<Login/>}/> 
  <Route path="/signup" element={<Signup/>}/> 
  <Route path="/singleproduct/:id" element={<SingleProduct/>} />
  
  <Route path="*" element={<Error/>}/>
</Routes>
</CountProvider>
  </Router>
  </Hicontext.Provider>
  </Shopcontextprovider>
  </div>
  ) ;
  
}

export default App;
