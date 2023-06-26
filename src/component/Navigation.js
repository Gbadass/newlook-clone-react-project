import {IconName, IoPersonOutline,IoLocationOutline, IoHeartOutline,IoBagOutline,IoSearch } from "react-icons/io5";



function Navigation() {
  return (
    <div>
      <nav className="nav01">
        <div className="cover002">
        <IoLocationOutline className="icon-location"/>
        <p className="p01">Find a store</p>
        </div>

        <p className="p02">NEW LOOK</p>
        <div className="cover001">
        <p className="p03"> Account </p>
        <IoPersonOutline className="icons-user"/>
        </div>

      </nav>
      <nav className="nav02">
      <ul className="ul-cover">
        <li className="li01">Womens</li>
        <li className="li01">Kids</li>
        <li className="li01">Mens</li>
        <li className="li01">Sale</li>
      </ul>

        <div className="input-cover">
          <div>
          <input type="text" className="input-placeholder" placeholder="Search" />
          <IoSearch className="search-icon"/>
          </div>

        <div>
        <IoHeartOutline className="like-icon"/>
        </div>

        <div>
        <IoBagOutline className="icon-bag"/>
        </div>

        </div>

      </nav>

      <nav className="nav03">
        <div className="nav03-div1">
        <p className="nav03-p1">Shop budget-proof fashion favourites <br /> & limited-time price drop down!*</p>
        <p className="nav03-p2"><span >T&Cs apply.</span> Selected lines only</p>
        </div>

      </nav>
    </div>

  )
}


export default Navigation