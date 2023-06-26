import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navigation from "./component/Navigation";
import  First from "./component/First"
import Second from "./component/Second";


function App(){
  return(
    <div>
<Navigation/>
<First/>
<Second/>

    </div>
  )
}


export default App;