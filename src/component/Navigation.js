import { IconName, IoPersonOutline, IoLocationOutline, IoHeartOutline, IoBagOutline, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import Seven from "./Clothing";
import { useState } from "react";
import { useContext } from "react";
import { Newlookcontext } from "../component/Context/Newlookcontext";

function Navigation() {

  const contextData = useContext(Newlookcontext) 
  const {cart, setCart} = contextData

  const [isHovered, setIsHovered] = useState(false)

  const handleIconHover = () => {
    setIsHovered(true)
  }

  const handleIconLeave = () => {
    setIsHovered(false)
  }

  const [isWomenHovered, setIsWomenHovered] = useState(false);

  const handleWomenHover = () => {
    setIsWomenHovered(true);
  };

  const handleWomenLeave = () => {
    setIsWomenHovered(false);
  };

  const [isKidHovered, setIsKidHovered] = useState(false);

  const handleKidHover = () => {
    setIsKidHovered(true);
  };

  const handleKidLeave = () => {
    setIsKidHovered(false);
  };


  const [isMensHovered, setIsMensHovered] = useState(false);

  const handleMensHover = () => {
    setIsMensHovered(true);
  };

  const handleMensLeave = () => {
    setIsMensHovered(false);
  };

  const [isSalesHovered, setIsSalesHovered] = useState(false);

  const handleSalesHover = () => {
    setIsSalesHovered(true);
  };

  const handleSalesLeave = () => {
    setIsSalesHovered(false);
  };

  

  return (
    <div>
      <nav className="nav01">
        <div className="cover002">
          <IoLocationOutline className="icon-location" />
          <p className="p01">Find a store</p>
        </div>

        <p className="p02">NEW LOOK</p>
        <div className={`cover001 ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleIconHover}
          onMouseLeave={handleIconLeave}>
          <p className="p03"> Account </p>
          <IoPersonOutline className="icons-user" />
          <div className="login-dropdown">
              <Link to="/login">
              <button>Sign up</button>
              </Link>
           
            <hr className="newline" />
            <Link to="/signup" className="signup-link">
            <p>Create Account</p>
            </Link>
          </div>
        </div>

        {/* <div>

        </div> */}

      </nav>
      <nav className="nav02">
        <ul className="ul-cover">
          <div className={`li01-div1 ${isWomenHovered ? "hovered" : ""}`}
            onMouseEnter={handleWomenHover}
            onMouseLeave={handleWomenLeave}>
            <li className="li-women" >Womens</li>
          </div>
          <div className={`li01-div2 ${isKidHovered ? "hovered" : ""}`}
            onMouseEnter={handleKidHover}
            onMouseLeave={handleKidLeave}>
            <li className="li-women2">Kids</li>
          </div>
          <div className={`li01-div3 ${isMensHovered ? "hovered" : ""}`}
          onMouseEnter={handleMensHover}
            onMouseLeave={handleMensLeave}>
            <Link to="">
              <li className="li-women3">Mens</li>
            </Link>
          </div>

          <div className={`li01-div4 ${isSalesHovered ? "hovered" : ""}` }
                    onMouseEnter={handleSalesHover}
                    onMouseLeave={handleSalesLeave}>
          <li className="li-women4">Sale</li>
          </div>

        
        </ul>

        <div className="input-cover">
          <div>
            <input type="text" className="input-placeholder" placeholder="Search" />
            <IoSearch className="search-icon" />
          </div>

          <div>
            <IoHeartOutline className="like-icon" />
            <span className="like-span">1</span>
          </div>

          <div>
            <IoBagOutline className="icon-bag" />
            <span className="cart-span">{cart.length? (cart.length) : (null)}</span>
          </div>

        </div>

      </nav>

      <nav className="nav03">
        <div className="nav03-div1">
          <p className="nav03-p1">Shop budget-proof fashion favourites <br /> & limited-time price drop down!*</p>
          <p className="nav03-p2"><span >T&Cs apply.</span> Selected lines only</p>
        </div>

      </nav>
      {isWomenHovered && (
        <div className={`dropdown-div ${isWomenHovered ? "show" : ""}`}
          onMouseEnter={handleWomenHover}
          onMouseLeave={handleWomenLeave}
        >
          <ul className="new-ul">
            <li className="new-li">
              <Link to="" className="dropdown-link1">
                Clothing
              </Link>
            </li>
            <li className="new-li">
              <Link to="" className="dropdown-link1">
                Shoes
              </Link>
            </li>

            <li className="new-li">
              <Link to="" className="dropdown-link1">
                Accessories & Bags
              </Link>
            </li>

            <li className="new-li">
              <Link to="" className="dropdown-link1">
                Brands
              </Link>
            </li>

          </ul>

        </div>
      )}

    {isKidHovered && ( 
      <div className={`dropdown-div2 ${isKidHovered ? "show": ""}`}
      onMouseEnter={handleKidHover}
      onMouseLeave={handleKidLeave}
      >
        <ul className="new-ul">
          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Girls
          </Link>
          </li>
          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Boys
          </Link>
          </li>

          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Brands
          </Link>
          </li>


        </ul>

      </div>
  )}
        {isMensHovered && (
      <div className={`dropdown-div3 ${isMensHovered ? "Show" : ""}`}
      onMouseEnter={handleMensHover}
      onMouseLeave={handleMensLeave}>
        <ul className="new-ul">
          <li className="new-li">
          <Link to="/clothing" className="dropdown-link1">
          Clothing
          </Link>
          </li>
          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Brands
          </Link>
          </li>

          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Shoes & Boots
          </Link>
          </li>

          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Basics - from &pound;7.99
          </Link>
          </li>

          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Accessories
          </Link>
          </li>

        </ul>

      </div>
        )}

      {isSalesHovered && (
      <div className={`dropdown-div4 ${isSalesHovered ? "show" : ""}` }
      onMouseEnter={handleSalesHover}
      onMouseLeave={handleSalesLeave}>
        <ul className="new-ul">
          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Women
          </Link>
          </li>
          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Girls
          </Link>
          </li>

          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Boys
          </Link>
          </li>

          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Men
          </Link>
          </li>

          <li className="new-li">
          <Link to="" className="dropdown-link1">
          Accessories
          </Link>
          </li>

        </ul>

      </div> 
      )}

    </div>

  )
}


export default Navigation