import img02 from "./images/2022_WK00_HP_OFFERS_4-GRID_DESKTOP_3-4_3-2.jpeg"
import img03 from "./images/2022_WK00_HP_OFFERS_4-GRID_DESKTOP_3-4_3-1.jpg"
import img04 from "./images/2022_WK00_HP_OFFERS_4-GRID_DESKTOP_3-4_31.jpg"
import img05 from "./images/2022_WK00_HP_OFFERS_4-GRID_DESKTOP_3-4_2201.jpg"

function Second() {
  return(
<div>
<section className="section02">
<div className="section02-div01">
<img src={img02} alt="" />
</div>
<div className="section02-div01">
<img src={img03} alt="" />
</div>
<div className="section02-div01">
<img src={img04} alt="" />
</div>
<div className="section02-div01">
<img src={img05} alt="" />
</div>
</section>

</div>
  )
}

export default Second