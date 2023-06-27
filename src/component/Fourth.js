import img03 from "./images/2023_WK13_GLOBAL_BUBBLE_1.jpg"
import img04 from "./images/2023_WK13_GLOBAL_BUBBLE_2.jpg"
import img05 from "./images/2023_WK13_GLOBAL_BUBBLE_3.jpg"
import img06 from "./images/2023_WK13_GLOBAL_BUBBLE_4.jpg"
import img07 from "./images/2023_WK08_SUMMER_GLOBAL_BUBBLES_KIND.jpg"
import img08 from "./images/2023_WK47_SPRING_GLOBAL_BUBBLES_HOMEWEAR.jpg"

import img09 from "./images/WW-BUBBLES-axparis-logo_1.jpg"
import img10 from "./images/WW-BUBBLES-BLUEVANILLA-logo_1.jpg"
import img11 from "./images/WW-BUBBLES-QUIZ-logo.jpg"
import img12 from "./images/WW-BUBBLES-PINKVANILLA-logo_1.jpg"
import img13 from "./images/little-mistress.jpg"
import img14 from "./images/WW-BUBBLES-APRICOT-logo_1.jpg"
import { IconName, IoChevronForward } from "react-icons/io5";
import img15 from "./images/WW-BUBBLES-CAMEOROSE-logo_1.jpg"
import img16 from "./images/skinny-dip.jpg"
import img17 from "./images/WW-BUBBLES-MELA-logo.jpg"
import { useState } from "react"


function Fourth() {

  const [showNestedImages, setShowNestedImages] = useState(false);

  const handleChevronClick = () => {
    setShowNestedImages(!showNestedImages);
  };


  return (
    <div className="section03">
      <h1 className="fourth-h1">Discover more</h1>
      <div className="fourth-div01">
        <div className="fourth-innerd1">
          <img src={img03} alt="" />
          <p className="div-p1">Curves</p>
        </div>
        <div className="fourth-innerd1">
          <img src={img04} alt="" />
          <p className="div-p1">Maternity</p>
        </div>
        <div className="fourth-innerd1">
          <img src={img05} alt="" />
          <p className="div-p1">Petite</p>
        </div>
        <div className="fourth-innerd1">
          <img src={img06} alt="" />
          <p className="div-p1">Tall</p>
        </div>
        <div className="fourth-innerd1">
          <img src={img07} alt="" />
          <p className="div-p1">New Look Kind</p>
        </div>
        <div className="fourth-innerd1">
          <img src={img08} alt="" />
          <p className="div-p1">Homeware</p>
        </div>
      </div>

      <h1 className="fourth-h1">Trending Branding....</h1>
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
        <IoChevronForward className="arrowhead-icon"/>
      </div>
    </div>
  )
}

export default Fourth