import Navigation from "../component/Navigation"
import { IoIosCheckmark} from "react-icons/io";
import Footer from "../component/Footer";
import image12 from "../component/images/8465706022.jpg"
import image13 from "../component/images/new11.webp"
import image14 from "../component/images/8465706013.jpg"
import { Link } from "react-router-dom";


function Signup() {
  return(
<div>
<Navigation/>
<div className="clothing-div">
        <div className="clothing-innerdiv01">
          <p className="clothing-innerdivp1">Home</p>
          <div className="slanted-line"></div>
          <p className="clothing-innerdivp1" >Signin</p>

        </div>
      </div>

      <div className="two-buttondivs">
        <Link to="/login">
        <button className="btnn001">l'VE GOT AN ACCOUNT</button>
        </Link>
          <Link to="/signup">
          <button className="btnn002">CREATE AN ACCOUNT</button>
          </Link>

      </div>

      <div className="button-divssection01">
        <p className="createaza-p">Create Your Account</p>
        <div className="innergreen-div">
          <div className="first-check">
          <IoIosCheckmark className="done"/>
        <p>Fast Checkout</p>
          </div>
          <div className="first-check">
          <IoIosCheckmark className="done"/>
        <p>Save your bag</p>
          </div>
          <div className="first-check">
          <IoIosCheckmark className="done"/>
        <p>See the status of your order</p>
          </div>




        </div>
        <form action="" className="form001">
          <div className="email-div">
          <label   htmlFor="">Email Address * <br />
              <input className="inputt01" type="text" />
            </label>
          </div>
          <div className="password-div">
          <label   htmlFor="">Password * <br />
              <input className="inputt01" type="text" />
              <p className="label-p">Use 7 or more characters atleast with 1 number</p>
            </label>
          </div>
          <div className="title-div">
          <label   htmlFor="">Title * <br /> 
            <select className="title-option" name="" id="">
              <option  value="">Select title</option>
              <option   value="">Mrs</option>
              <option   value="">Ms</option>
              <option   value="">Miss</option>
              <option   value="">Mr</option>
            </select>
            </label>
          </div>

          <div className="email-div">
          <label   htmlFor="">First Name * <br />
              <input className="inputt01" type="text" />
            </label>
          </div>

          <div className="email-div">
          <label   htmlFor="">Last Name * <br />
              <input className="inputt01" type="text" />
            </label>

            <div className="check-div">
              <input type="checkbox" />
              <p>Yes, i am over the age of 18 * </p>
            </div>
          </div>


          </form>
          <button className="createmy">CREATE MY ACCOUNT</button>

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

export default Signup