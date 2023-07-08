import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Clothing from "./component/Clothing";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NewlookProvider from "./component/Context/Newlookcontext";

function App(){
  return(
    <div>
      <NewlookProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clothing" element={<Clothing/>}/>
        {/* <Route path="/clothing/:category/:id" element={<Product/>}/> */}
        <Route path="/clothing/:category/:id" element={<Product/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        

        

        
      </Routes>
      </BrowserRouter>
      </NewlookProvider>



    </div>
  )
}


export default App;