import image01 from "./images/image01.webp"
import image02 from "./images/image02.webp"
import image03 from "./images/image03.webp"
import image04 from "./images/image04.webp"



function Fift() {
  return(
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
  )
}

export default Fift