import Navigation from "../component/Navigation"
import { IoIosCheckmark} from "react-icons/io";
import Footer from "../component/Footer";
import image12 from "../component/images/8465706022.jpg"
import image13 from "../component/images/new11.webp"
import image14 from "../component/images/8465706013.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


function Signup() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [title, setTitle] = useState("")
const [fname, setFname] = useState("")
const [lname, setLname] = useState("")
const [phone, setPhone] = useState("")
const [error, setError] = useState(false)
const [signup, setSignup] = useState([]);
const[emailChecked, setEmailChecked ] = useState(false)
const [passwordDescription, setPasswordDescription] = useState(
  "Use 8 or more characters with at least one numeric letter and one uppercase letter."
);

const handleEmailInfo = (e) => {
  e.target.checked? setEmailChecked(true) : setEmailChecked(false)

}

const handleEvent = (e) => {
  e.preventDefault()
  if (email === "" || password === "" || title === "" || fname === "" || lname === "" ) {
    setError(true)
    return;
  }
  if (!/(?=.*\d)(?=.*[A-Z]).{8,}/.test(password)) {
    setError(true);
    setPasswordDescription(
      "Use 8 or more characters with at least one numeric letter and one uppercase letter."
    );
    return;
  }
  const logObj = {
    name: fname+" "+lname,
    phone:phone,
    email: email,
    password: password,

  }

  console.log(logObj)
    fetch(`http://159.65.21.42:9000/register`,{
      method: "POST",
      headers: {"Content-Type": "Application/Json"},
      body:JSON.stringify(logObj) 

    })
    // .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      setSignup(data)
      alert("sign up succesful")
    })
    .catch((err) => {
      console.log(err)
    })


}



//  useEffect(() => {
//   fetchData()
//  })

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
        <form action="" className="form001" onSubmit={handleEvent}>
          <div className="email-div">
          <label   htmlFor="">Email Address * <br />
              <input className="inputt01" value={email} onChange={(e) => setEmail(e.target.value)} type="text" /> <br />
              {error === true && email === "" ? <span className="newred">Please enter email</span>: null}
            </label>
          </div>
          <div className="password-div">
          <label   htmlFor="">Password * <br />
              <input className="inputt01" value={password} onChange={(e) => setPassword(e.target.value)} type="text" /> <br />
              {error === true && password === "" ? <span className="newred">Please enter password</span>: null}
              {error === true && !/(?=.*\d)(?=.*[A-Z]).{8,}/.test(password) ? (
                <span className="newred">{passwordDescription}</span>
              ) : null}
              <p className="label-p">Use 8 or more characters atleast with 1 number</p>
            </label>
          </div>
          <div className="title-div">
          <label   htmlFor="">Title * <br />
            <select className="title-option" value={title} onChange={(e) => setTitle(e.target.value)} name="" id="">
              <option  value="">Select title</option>
              <option   value="Mrs">Mrs</option>
              <option   value="Ms">Ms</option>
              <option   value="Miss">Miss</option>
              <option   value="Mr">Mr</option>
            </select> <br />

            {error === true && title === "" ? <span className="newred">Please select title</span>: null}
            </label>
          </div>

          <div className="email-div">
          <label   htmlFor="">First Name * <br />
              <input className="inputt01" value={fname} onChange={(e) => setFname(e.target.value)}
              type="text" /> <br />

              {error === true && fname === "" ? <span className="newred">Please enter first name</span>: null}
            </label>
          </div>

          <div className="email-div">
          <label   htmlFor="">Phone * <br />
              <input className="inputt01" value={phone} onChange={(e) => setPhone(e.target.value)}
              type="text" /> <br />

              {error === true && phone === "" ? <span className="newred">Please enter phone</span>: null}
            </label>
          </div>

          <div className="email-div">
          <label   htmlFor="">Last Name * <br />
              <input className="inputt01" value={lname} onChange={(e)=> setLname(e.target.value)} type="text" /> <br />
              {error === true && lname === "" ? <span className="newred">Please enter last name</span>: null}
            </label>

            <div className="check-div">
              <input type="checkbox" checked = {emailChecked} onChange= {handleEmailInfo} />
              <p>Yes, i am over the age of 18 * </p>
            </div>
            {emailChecked === true ? <span className="newred">you have accepted</span> : null}
          </div>

          <button className="createmy">CREATE MY ACCOUNT</button>
          </form>


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