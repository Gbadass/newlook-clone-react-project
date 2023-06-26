import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navigation from "./component/Navigation";
import  First from "./component/First"


function App(){
  return(
    <div>
<Navigation/>
<First/>

    </div>
  )
}


export default App;