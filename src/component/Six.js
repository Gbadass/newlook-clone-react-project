import img09 from "./images/2023_WK1_ShoppingWithUs_Bubble1_1.jpg"
import img10 from "./images/2023_WK1_ShoppingWithUs_Bubble3_1.jpg"
import img11 from "./images/img1.png"
import img12 from "./images/img2.png"
import img13 from "./images/img3.png"
import img14 from "./images/img4.png"
import { IconName, IoChevronForward } from "react-icons/io5";



function Six(){
  return (
<div>
  <div>
  <h1 className="fourth-h1">Shopping with us</h1>
      <div className="fourth-div0-1">
        <div className="fourth-innerd1">
          <img src={img09} alt="" />

        </div>
        <div className="fourth-innerd1">
          <img src={img10} alt="" />

        </div>
        <div className="fourth-innerd1">
          <img src={img11} alt="" />

        </div>
        <div className="fourth-innerd1">
          <img src={img12} alt="" />

        </div>
        <div className="fourth-innerd1">
          <img src={img13} alt="" />

        </div>
        <div className="fourth-innerd1">
          <img src={img14} alt="" />

        </div>

{/* last three divs */}
        {/* <div className="fourth-innerd1">
          <img src={img15} alt="" />

        </div> 

        <div className="fourth-innerd1">
          <img src={img16} alt="" />

        </div>

        <div className="fourth-innerd1">
          <img src={img17} alt="" />

        </div> */}



        

        {/* <div className="second-slide">

        </div> */}
      </div>
      <div>
        <IoChevronForward className="arrowhead-icon1"/>
      </div>
  </div>
</div>
  )
}

export default Six