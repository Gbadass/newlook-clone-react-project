import Navigation from "./Navigation"
import {  IoChevronForward } from "react-icons/io5";

function Seven() {
  return (
    <div>
      <Navigation />
      <div className="clothing-div">
        <div className="clothing-innerdiv01">
          <p className="clothing-innerdivp1">Home</p>
          <div className="slanted-line"></div>
          <p className="clothing-innerdivp1" >Mens</p>
          <div className="slanted-line"></div>
          <p className="clothing-innerdivp1">Mens Clothing</p>
        </div>
      </div>

      <div className="clothing-section1">
    <h1 className="sect1-h1">Mens Clothing</h1>
    <p className="sect1-p1">When your wardrobe is in need of a pick-me-up, look no further than our men’s clothing collection. From everyday <br /> basics to trend-setting styles, we’ve got all the pieces you’ll be so glad you’ve got. Ready to update your look? <br /> Then, just scroll down…</p>
    <div className="clothing-buttondivs">
      <button>Men's Cargo Short </button>
      <button>Men's Checked Trouser </button>
      <button>Men's Cargo Trouser </button>
      <button>Men's Tracksuits </button>
      <button>Men's Suit Under &pound;80 </button>
      <button>Men's Shirts </button>
      <button>Men's T-Shirts </button>
      {/* <button>Men's Cargo Short </button> */}


    </div>
    <IoChevronForward className="forward-icon"/>

      </div>
    </div>


  )
}

export default Seven