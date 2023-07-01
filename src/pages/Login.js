import Navigation from "../component/Navigation"
import { Link } from "react-router-dom"
import image12 from "../component/images/8465706022.jpg"
import image13 from "../component/images/new11.webp"
import image14 from "../component/images/8465706013.jpg"
import Footer from "../component/Footer"

function Login(){
  return(
<div>
  <Navigation/>
  <div className="clothing-innerdiv01">
          <p className="clothing-innerdivp1">Home</p>
          <div className="slanted-line"></div>
          <p className="clothing-innerdivp1" >Signin</p>

        </div>

  <div className="two-buttondivs">
        <Link to="/login">
        <button className="btnn001">l'VE GOT AN ACCOUNT</button>
        </Link>
          <Link to="/signup">
          <button className="btnn002">CREATE AN ACCOUNT</button>
          </Link>

      </div>

  <div className="button-divssection01-1">
        <p className="createaza-p">Returning Customers</p>
        <form action="" className="form001">
          <div className="email-div">
          <label   htmlFor="">Email Address * <br />
              <input className="inputt01" type="text" />
            </label>
          </div>
          <div className="password-div">
          <label   htmlFor="">Password * <br />
              <input className="inputt01" type="text" />
            </label>
          </div>


          </form>
          <button className="createmy">CREATE MY ACCOUNT</button>
          <p className="forgotten">Forgotten password?</p>

      </div>
      <div className="there">
      <p className="faves">Recently Viewed</p>
        <hr className="newhr" />
      </div>
      <div className="last-grid">
          <div className="lastgrid-div1">
            <img src={image12} alt="" />
            <p>&pound;16.99</p>
          </div>
          <div className="lastgrid-div1">
            <img src={image13} alt="" />
            <p>&pound;16.99</p>
          </div>
          <div className="lastgrid-div1">
            <img src={image14} alt="" />
            <p>&pound;17.99</p>
          </div>
      </div>
      <Footer/>
</div>
  )
}


export default Login