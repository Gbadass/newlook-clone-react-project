import img01 from "./images/2023_WK8_GLOBAL_DESKTOP_HERO.jpg"
import img02 from "./images/2022_WK00_HP_OFFERS_4-GRID_DESKTOP_3-4_3-2.jpeg"
import img003 from "./images/2022_WK00_HP_OFFERS_4-GRID_DESKTOP_3-4_3-1.jpg"
import img04 from "./images/2022_WK00_HP_OFFERS_4-GRID_DESKTOP_3-4_31.jpg"
import img05 from "./images/2022_WK00_HP_OFFERS_4-GRID_DESKTOP_3-4_2201.jpg"
import img03 from "./images/2023_WK13_GLOBAL_BUBBLE_1.jpg"
import img004 from "./images/2023_WK13_GLOBAL_BUBBLE_2.jpg"
import img005 from "./images/2023_WK13_GLOBAL_BUBBLE_3.jpg"
import img06 from "./images/2023_WK13_GLOBAL_BUBBLE_4.jpg"
import img07 from "./images/2023_WK08_SUMMER_GLOBAL_BUBBLES_KIND.jpg"
import img08 from "./images/2023_WK47_SPRING_GLOBAL_BUBBLES_HOMEWEAR.jpg"

import img009 from "./images/WW-BUBBLES-axparis-logo_1.jpg"
import img100 from "./images/WW-BUBBLES-BLUEVANILLA-logo_1.jpg"
import img11 from "./images/WW-BUBBLES-QUIZ-logo.jpg"
import img12 from "./images/WW-BUBBLES-PINKVANILLA-logo_1.jpg"
import img13 from "./images/little-mistress.jpg"
import img14 from "./images/WW-BUBBLES-APRICOT-logo_1.jpg"
import {  IoChevronForward } from "react-icons/io5";
import img15 from "./images/WW-BUBBLES-CAMEOROSE-logo_1.jpg"
import img16 from "./images/skinny-dip.jpg"
import img17 from "./images/WW-BUBBLES-MELA-logo.jpg"
import { useState } from "react"
import image01 from "./images/image01.webp"
import image02 from "./images/image02.webp"
import image03 from "./images/image03.webp"
import image04 from "./images/image04.webp"
import img09 from "./images/2023_WK1_ShoppingWithUs_Bubble1_1.jpg"
import img10 from "./images/2023_WK1_ShoppingWithUs_Bubble3_1.jpg"
import img011 from "./images/img1.png"
import img012 from "./images/img2.png"
import img013 from "./images/img3.png"
import img014 from "./images/img4.png"


function First() {

  const [showNestedImages, setShowNestedImages] = useState(false);

  const handleChevronClick = () => {
    setShowNestedImages(!showNestedImages);
  };

  return (
<div>
  <section className="section01">
<img src={img01} alt="" />
  </section>

  <section className="section02">
<div className="section02-div01">
<img src={img02} alt="" />
</div>
<div className="section02-div01">
<img src={img003} alt="" />
</div>
<div className="section02-div01">
<img src={img04} alt="" />
</div>
<div className="section02-div01">
<img src={img05} alt="" />
</div>
</section>

<div className="section03">
      <h1 className="fourth-h1">Discover more</h1>
      <div className="fourth-div01">
        <div className="fourth-innerd1">
          <img src={img03} alt="" />
          <p className="div-p1">Curves</p>
        </div>
        <div className="fourth-innerd1">
          <img src={img004} alt="" />
          <p className="div-p1">Maternity</p>
        </div>
        <div className="fourth-innerd1">
          <img src={img005} alt="" />
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
          <img src={img009} alt="" />

        </div>
        <div className="fourth-innerd1">
          <img src={img100} alt="" />

        </div>
        <div className="fourth-innerd1">
          <img src={img011} alt="" />

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

    <div className="section05">
  <h1 className="section05-h1">Be inspired and share your style</h1>
  <p className="section05-p1">Discover#ThatNewLookFeeling</p>
  <hr className="section05-hr" />
  <div className="section05-cont1" >
    <div className="section05-img-div">
      <img src={image01} alt="" />
    </div>

    <div className="section05-img-div">
      <img src={image02} alt="" />
    </div>

    <div className="section05-img-div">
      <img src={image03} alt="" />
    </div>

    <div className="section05-img-div">
      <img src={image04} alt="" />
    </div>
  </div>
</div>

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
          <img src={img012} alt="" />

        </div>
        <div className="fourth-innerd1">
          <img src={img013} alt="" />

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
</div>
  )
}

export default First