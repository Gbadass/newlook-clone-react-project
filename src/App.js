import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navigation from "./component/Navigation";
import  First from "./component/First"
import Second from "./component/Second";
import Fourth from "./component/Fourth";
import Fift from "./component/Fift";
import Six from "./component/Six";
import Footer from "./component/Footer";


function App(){
  return(
    <div>
<Navigation/>
<First/>
<Second/>
<Fourth/>
<Fift/>
<Six/>
<Footer/>

    </div>
  )
}


export default App;