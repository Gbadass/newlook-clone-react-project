import Navigation from "../component/Navigation"
import { Link, useNavigate } from "react-router-dom"
import image12 from "../component/images/8465706022.jpg"
import image13 from "../component/images/new11.webp"
import image14 from "../component/images/8465706013.jpg"
import Footer from "../component/Footer"
import { useState } from "react"

function Login(){


const Navigate = useNavigate()
const [email,setEmail] = useState("")
const [password, setPassword] = useState("")
const[error, setError] = useState(false)

const handleEvent = (e) => {
  e.preventDefault()
  if (email === "" || password === "") {
    setError(true)
    return;
  }

  let signinObj = {
    email: email,
    password: password,
  }

  fetch("http://159.65.21.42:9000/users")
  .then((resp) => resp.json())
  .then((data) => {
    const getUser = data.find(
      (user) => user.email === email && user.password === password
    );
    if (getUser) {
      alert("login succesfull")
      Navigate("/")
    }else{
      alert("invalid log in details")
    }
  })
  .catch((err) => {
    alert(err.message)
  });
};



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
        <form action="" className="form001" onSubmit={handleEvent}>
          <div className="email-div">
          <label   htmlFor="">Email Address * <br />
              <input className="inputt01" type="text" value={email} onChange={(e) => setEmail(e.target. value)}  /> <br />
              {error === true && email === "" ? <span className="newred">please enter email</span>: null}
            </label>
          </div>
          <div className="password-div">
          <label   htmlFor="">Password * <br />
              <input className="inputt01" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/> <br />
              {error === true && password === "" ? <span className="newred">please enter password</span>: null}
            </label>
          </div>

          <button className="createmy01">Log in</button>
          </form>

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