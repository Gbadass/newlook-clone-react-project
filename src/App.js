import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navigation from "./component/Navigation";
import  First from "./component/First"
import Second from "./component/Second";
import Fourth from "./component/Fourth";


function App(){
  return(
    <div>
<Navigation/>
<First/>
<Second/>
<Fourth/>

    </div>
  )
}


export default App;