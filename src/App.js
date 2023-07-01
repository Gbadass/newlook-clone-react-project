import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Seven from "./component/Clothing";
import Product from "./pages/Product";
import Signup from "./pages/Signup";


function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/seven" element={<Seven/>}/>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/signup" element={<Signup/>}/>

        

        
      </Routes>
      </BrowserRouter>


    </div>
  )
}


export default App;