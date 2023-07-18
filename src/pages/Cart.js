import Navigation from "../component/Navigation"
import image012 from "../component/images/8465706103.jpg"
import { IoIosHeartEmpty, IoIosSquare } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import imagediv from "../component/images/flagsvg01.jpeg"
import image5 from "../component/images/b1.jpeg"
import image6 from "../component/images/b2.jpeg"
import image7 from "../component/images/b3.jpeg"
import image8 from "../component/images/b4.jpeg"
import { IoChevronForward } from "react-icons/io5";
import image12 from "../component/images/8465706022.jpg"
import image13 from "../component/images/new11.webp"
import image14 from "../component/images/8465706013.jpg"
import Footer from "../component/Footer";
import { useContext } from "react";
import { Newlookcontext } from "../component/Context/Newlookcontext";
import { useState } from "react";



function Cart() {
  const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const contextData = useContext(Newlookcontext)
  const { cart, setCart } = contextData;
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartData")));
  const isFirstRender = cart.length > 0;
  const [showEdit, setShowEdit] = useState(false);
  const[totalPrice, setTotalPrice] = useState(calculateTotalPrice(JSON.parse(localStorage.getItem("cartData"))));


const editFunc = (id,quantity) => {
  let c1 = cart;
  c1.map((editedItem,index) => 
    editedItem._id === id? c1[index].quantity = quantity:null
    
  );
  setCart(c1);
  setCartItems(c1);
  setTotalPrice(calculateTotalPrice(c1));
  console.log(c1)


}

  console.log(cart);

  const deleteItem = (id) => {
    const del = cart.filter((itemsofcart) => itemsofcart._id !== id)
    setCart(del)
    setCartItems(del);
    setTotalPrice(calculateTotalPrice(del));
    console.log(cart._id)
    localStorage.setItem("cartData", JSON.stringify(del))
  }

  // const addItemToCart = (item) => {
  //   const updatedCart = [...cart, item];
  //   setCart(updatedCart);
  // };

  const firstItemDeliveryInfo = cart.length > 0 ? cart[0].deliveryInfo : '';




  return (
    <div>
      <Navigation />
      <div className="newbanner">
        <p className="newbanner-p1">Got a gift card? You lucky thing...</p>
        <p className="newbanner-p2">Don't forget to redeem it when you check out</p>
      </div>
      <div className="newbanner-grid1">
        <div className="innerbanner1">
          <div className="justified-div">
            <h1 className="newest-h1">My Bag</h1>
            <p className="newest-newp">Items in your bag aren't reserved and may sell out.</p>
          </div>

          <hr className="newest-hr" />
          {
            cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div className="imagetext-div" key={index}>
                  <div className="bannernew-imgdiv">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="desc-cont">
                    <p className="p-name">{item.name} <span>(8465820)</span> </p>
                    {showEdit !== item._id ? (<div className="edit-divss">
                      <div className="groupofthings">
                        <p className="white-name">White</p>
                        <div className="lineoo"></div>
                        <p className="white-name01">Size: XL</p>
                        <div className="lineoo"></div>
                        <p className="white-name02">Quantity:{item.quantity}</p>
                      </div>
                      <div className="groupofthings02">
                        <IoIosHeartEmpty />
                        <p className="group-p1">Moved to Saved items</p>
                        <div className="lineooo"></div>
                        <p className="group-p1" onClick={() => setShowEdit(item._id)}>Edit</p>

                        <div className="lineooo"></div>
                        <p className="group-p1" onClick={() => deleteItem(item._id)} >Remove</p>
                      </div>
                      <p className="last-price">&pound;{item.price}</p>
                    </div>) : (          <div className="edit-diving">
            <div className="edit-diving01">
              <IoIosSquare className="rectangle-icon3-1" />
              <p>White</p>
            </div>
            <p className="change-color">Change color</p>
            <select name="" id="" className="select01">
              <option value="XS">XS</option>
              <option value="X">X</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select> <br />

            <select name="" id="" className="select01" onChange={(e) => editFunc(item._id, e.target.value)}>
              <option value="1">Qty: 1</option>
              <option value="2">Qty:2</option>
              <option value="3">Qty:3</option>
              <option value="4">Qty:4</option>
              <option value="5">Qty:5</option>
            </select>

            <p className="cancle01" onClick={() => setShowEdit("")}>Cancel</p>
          </div>)}


                  </div>
                </div>
              ))

            ) : (
              <div>
                <p> no item in cart</p>
              </div>
            )
          }


          <p className="access">Accessories You’ll Love</p>
          <hr className="thenewhr" />


          <div className="this-below">
            <div className="first-thisdiv">
              <div className="inner-firstdiv">
                <img src={image5} alt="" />
              </div>
              <div className="inner-seconddiv">
                <p className="inner-title001">Perfect pale Pink <br /> Silicone Nipple Cover</p>
                <p className="inner-prive">&pound;5.99</p>
                <p className="one-size01">One size</p>
                <button className="list-button">ADD TO CART</button>
              </div>
            </div>

            <div className="first-thisdiv">
              <div className="inner-firstdiv">
                <img src={image6} alt="" />
              </div>
              <div className="inner-seconddiv">
                <p className="inner-title001">Perfect pale Pink <br /> Silicone Nipple Cover</p>
                <p className="inner-prive">&pound;5.99</p>
                <p className="one-size01">One size</p>
                <button className="list-button">ADD TO CART</button>
              </div>
            </div>
            <div className="first-thisdiv">
              <div className="inner-firstdiv">
                <img src={image7} alt="" />
              </div>
              <div className="inner-seconddiv">
                <p className="inner-title001">Perfect pale Pink <br /> Silicone Nipple Cover</p>
                <p className="inner-prive">&pound;5.99</p>
                <p className="one-size01">One size</p>
                <button className="list-button">ADD TO CART</button>
              </div>
            </div>
            <div className="first-thisdiv">
              <div className="inner-firstdiv">
                <img src={image8} alt="" />
              </div>
              <div className="inner-seconddiv">
                <p className="inner-title001">Perfect pale Pink <br /> Silicone Nipple Cover</p>
                <p className="inner-prive">&pound;5.99</p>
                <p className="one-size01">One size</p>
                <button className="list-button">ADD TO CART</button>
              </div>
            </div>
          </div>


        </div>
        {cart.length > 0 && (
          <div className="second-colum">
            <div className="secondcolum-div1">
              <p className="deliveryp01">Delivery</p>
              <p>-</p>
            </div>
            <div className="secondcolum-div1-1">
              <p className="deliveryp01">Total:</p>
              <p className="last-price01">&pound;{totalPrice}</p>
            </div>

            <div className="product-details-div03">
              <p className="interest">Pay in 3 interest free payment</p>
              <div className="paypal-div">
                <div className="paypal-innerd1">
                  <svg width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.0441 0.685791H6.14227C3.23917 0.685791 0.885742 3.08097 0.885742 6.03558V17.6216C0.885742 20.5762 3.23917 22.9714 6.14227 22.9714H35.0441C37.9472 22.9714 40.3006 20.5762 40.3006 17.6216V6.03558C40.3006 3.08097 37.9472 0.685791 35.0441 0.685791Z" fill="#FFB3C7" />
                    <g clip-path="url(#clip0)">
                      <path d="M36.6677 13.6376C36.1427 13.6376 35.7171 14.0483 35.7171 14.5549C35.7171 15.0613 36.1427 15.4721 36.6677 15.4721C37.1926 15.4721 37.6183 15.0614 37.6183 14.5549C37.6183 14.0482 37.1926 13.6376 36.6677 13.6376ZM33.5403 12.9285C33.5403 12.235 32.9259 11.6729 32.168 11.6729C31.4102 11.6729 30.7957 12.235 30.7957 12.9285C30.7957 13.6221 31.4101 14.1843 32.168 14.1843C32.926 14.1843 33.5403 13.6221 33.5403 12.9285ZM35.0598 10.488V15.363H33.5454V15.0569C33.1175 15.3385 32.6011 15.504 32.044 15.504C30.57 15.504 29.375 14.3509 29.375 12.9285C29.375 11.5061 30.57 10.3531 32.044 10.3531C32.6011 10.3531 33.1175 10.5186 33.5454 10.8002V10.488L35.0598 10.488ZM21.4256 10.4881H19.875V15.363H21.4291V13.0901C21.4291 12.3213 22.2927 11.908 22.8919 11.908C22.898 11.908 22.9037 11.9086 22.9099 11.9087V10.4885C22.2949 10.4885 21.7292 10.7426 21.4256 11.1239L21.4256 10.4881ZM17.5632 12.9285C17.5632 12.235 16.9488 11.6729 16.1909 11.6729C15.433 11.6729 14.8186 12.235 14.8186 12.9285C14.8186 13.6221 15.433 14.1843 16.1909 14.1843C16.9488 14.1843 17.5632 13.6221 17.5632 12.9285ZM19.0827 10.488V15.363H17.5682V15.0569C17.1403 15.3385 16.6239 15.504 16.067 15.504C14.5928 15.504 13.3978 14.3509 13.3978 12.9285C13.3978 11.5061 14.5928 10.3531 16.067 10.3531C16.6239 10.3531 17.1404 10.5186 17.5682 10.8002V10.488L19.0827 10.488ZM25.1235 11.038V10.4883H23.6156V15.363H25.1421V12.804C25.1421 12.0618 25.6579 11.6983 26.279 11.6983C26.9446 11.6983 27.3272 12.082 27.3272 12.7939V15.363H28.8399V12.2651C28.8399 11.1293 27.904 10.3568 26.6839 10.3568C26.0789 10.3567 25.5063 10.538 25.1235 11.038ZM12.7769 15.363V8.31298H11.1918V15.363H12.7769ZM4.22852 15.363H5.90702V8.31166H4.22852V15.363ZM8.38233 12.3183L10.7025 15.363H8.62933L6.10783 12.0533L6.75859 11.5831C7.83779 10.803 8.4568 9.61069 8.4568 8.31165H10.0994C10.0994 9.8399 9.48214 11.2616 8.38233 12.3183Z" fill="#0A0B09" />
                    </g>
                    <defs><svg width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.0441 0.685791H6.14227C3.23917 0.685791 0.885742 3.08097 0.885742 6.03558V17.6216C0.885742 20.5762 3.23917 22.9714 6.14227 22.9714H35.0441C37.9472 22.9714 40.3006 20.5762 40.3006 17.6216V6.03558C40.3006 3.08097 37.9472 0.685791 35.0441 0.685791Z" fill="#FFB3C7" />
                      <g clip-path="url(#clip0)">
                        <path d="M36.6677 13.6376C36.1427 13.6376 35.7171 14.0483 35.7171 14.5549C35.7171 15.0613 36.1427 15.4721 36.6677 15.4721C37.1926 15.4721 37.6183 15.0614 37.6183 14.5549C37.6183 14.0482 37.1926 13.6376 36.6677 13.6376ZM33.5403 12.9285C33.5403 12.235 32.9259 11.6729 32.168 11.6729C31.4102 11.6729 30.7957 12.235 30.7957 12.9285C30.7957 13.6221 31.4101 14.1843 32.168 14.1843C32.926 14.1843 33.5403 13.6221 33.5403 12.9285ZM35.0598 10.488V15.363H33.5454V15.0569C33.1175 15.3385 32.6011 15.504 32.044 15.504C30.57 15.504 29.375 14.3509 29.375 12.9285C29.375 11.5061 30.57 10.3531 32.044 10.3531C32.6011 10.3531 33.1175 10.5186 33.5454 10.8002V10.488L35.0598 10.488ZM21.4256 10.4881H19.875V15.363H21.4291V13.0901C21.4291 12.3213 22.2927 11.908 22.8919 11.908C22.898 11.908 22.9037 11.9086 22.9099 11.9087V10.4885C22.2949 10.4885 21.7292 10.7426 21.4256 11.1239L21.4256 10.4881ZM17.5632 12.9285C17.5632 12.235 16.9488 11.6729 16.1909 11.6729C15.433 11.6729 14.8186 12.235 14.8186 12.9285C14.8186 13.6221 15.433 14.1843 16.1909 14.1843C16.9488 14.1843 17.5632 13.6221 17.5632 12.9285ZM19.0827 10.488V15.363H17.5682V15.0569C17.1403 15.3385 16.6239 15.504 16.067 15.504C14.5928 15.504 13.3978 14.3509 13.3978 12.9285C13.3978 11.5061 14.5928 10.3531 16.067 10.3531C16.6239 10.3531 17.1404 10.5186 17.5682 10.8002V10.488L19.0827 10.488ZM25.1235 11.038V10.4883H23.6156V15.363H25.1421V12.804C25.1421 12.0618 25.6579 11.6983 26.279 11.6983C26.9446 11.6983 27.3272 12.082 27.3272 12.7939V15.363H28.8399V12.2651C28.8399 11.1293 27.904 10.3568 26.6839 10.3568C26.0789 10.3567 25.5063 10.538 25.1235 11.038ZM12.7769 15.363V8.31298H11.1918V15.363H12.7769ZM4.22852 15.363H5.90702V8.31166H4.22852V15.363ZM8.38233 12.3183L10.7025 15.363H8.62933L6.10783 12.0533L6.75859 11.5831C7.83779 10.803 8.4568 9.61069 8.4568 8.31165H10.0994C10.0994 9.8399 9.48214 11.2616 8.38233 12.3183Z" fill="#0A0B09" />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="33.4286" height="9.40176" fill="white" transform="translate(4.22852 7.37146)" />
                        </clipPath>
                      </defs>
                    </svg>
                      <clipPath id="clip0">
                        <rect width="33.4286" height="9.40176" fill="white" transform="translate(4.22852 7.37146)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="paypal-innerd01">

                  <svg width="66" height="66" viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-p">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.44648 4.45703H9.18947C11.1991 4.45703 11.9557 5.47442 11.8387 6.96911C11.6455 9.43674 10.1537 10.802 8.17498 10.802H7.17595C6.90445 10.802 6.72184 10.9817 6.64841 11.4686L6.22426 14.2995C6.19624 14.4831 6.09962 14.5894 5.95469 14.6039H3.603C3.38174 14.6039 3.30348 14.4348 3.36145 14.0686L4.79527 4.99326C4.85131 4.62998 5.05034 4.45703 5.44648 4.45703Z" fill="#009EE3"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8585 6.68109C23.6653 8.71007 22.5783 9.83278 20.8634 9.83761H19.3648C19.1494 9.83761 19.045 10.0135 18.989 10.3738L18.6991 12.2164C18.6556 12.4946 18.5126 12.6318 18.302 12.6318H16.9078C16.6856 12.6318 16.6083 12.4898 16.6576 12.1719L17.8083 4.78737C17.8653 4.42408 18.0015 4.28882 18.2498 4.28882H21.587C22.8527 4.28882 24.018 4.97384 23.8585 6.68109ZM20.4547 8.24244C21.1648 8.21539 21.6363 7.7236 21.6837 6.83664C21.7126 6.28882 21.3426 5.89655 20.7542 5.89945L19.6856 5.90428L19.3194 8.24244H20.4547ZM27.6489 12.0666C27.7764 11.9507 27.9059 11.8908 27.8875 12.0337L27.8421 12.3758C27.8189 12.5545 27.8895 12.6492 28.0556 12.6492H29.2943C29.503 12.6492 29.6044 12.5651 29.6556 12.2424L30.4189 7.4521C30.4576 7.21152 30.3986 7.09365 30.216 7.09365H28.8537C28.731 7.09365 28.6711 7.16225 28.6392 7.34969L28.589 7.64437C28.5629 7.798 28.4924 7.82505 28.4267 7.67046C28.1957 7.1236 27.6064 6.87819 26.7841 6.89751C24.874 6.93713 23.5861 8.38737 23.4479 10.2463C23.3416 11.684 24.3716 12.8135 25.73 12.8135C26.7155 12.8135 27.1561 12.5236 27.6527 12.0695L27.6489 12.0666ZM25.3349 9.86949C25.4537 9.06563 26.2228 8.40959 27.045 8.40959C27.8672 8.40959 28.4402 9.06563 28.3213 9.86949C28.2025 10.6734 27.4344 11.3294 26.6112 11.3294C25.789 11.3294 25.216 10.6734 25.3349 9.86949ZM31.587 7.07819C31.3281 7.07819 31.2228 7.27143 31.3049 7.50911L32.8643 12.0753L31.3349 14.2482C31.2064 14.4299 31.3059 14.5951 31.4866 14.5951H32.8981C33.0662 14.6145 33.2301 14.5341 33.3175 14.3893L38.1136 7.51007C38.2614 7.29848 38.1919 7.07626 37.9494 7.07626H36.6131C36.3841 7.07626 36.2924 7.16708 36.1609 7.35742L34.1609 10.256L33.2672 7.35065C33.2151 7.17481 33.0846 7.07819 32.844 7.07819H31.587Z" fill="#113984"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M45.3717 6.68107C45.1785 8.71005 44.0915 9.83276 42.3766 9.83759H40.879C40.6635 9.83759 40.5592 10.0134 40.5031 10.3738L40.2133 12.2163C40.1698 12.4946 40.0268 12.6318 39.8162 12.6318H38.422C38.1997 12.6318 38.1225 12.4898 38.1717 12.1719L39.3244 4.78542C39.3814 4.42213 39.5176 4.28687 39.7659 4.28687H43.1031C44.3659 4.2888 45.5311 4.97382 45.3717 6.68107ZM41.9679 8.24242C42.678 8.21537 43.1495 7.72358 43.1968 6.83662C43.2258 6.2888 42.8558 5.89653 42.2674 5.89941L41.1988 5.90426L40.8326 8.24242H41.9679ZM49.1621 12.0666C49.2896 11.9506 49.4191 11.8907 49.4007 12.0337L49.3553 12.3758C49.3321 12.5545 49.4026 12.6492 49.5688 12.6492H50.8075C51.0162 12.6492 51.1176 12.5651 51.1688 12.2424L51.9321 7.45208C51.9708 7.2115 51.9118 7.09363 51.7292 7.09363H50.3688C50.2461 7.09363 50.1862 7.16223 50.1543 7.34967L50.1041 7.64435C50.078 7.79798 50.0075 7.82503 49.9418 7.67044C49.7109 7.12358 49.1215 6.87817 48.2993 6.89749C46.3891 6.93711 45.1012 8.38735 44.963 10.2463C44.8568 11.684 45.8867 12.8134 47.2452 12.8134C48.2307 12.8134 48.6712 12.5236 49.1679 12.0695L49.1621 12.0666ZM46.849 9.86947C46.9679 9.06561 47.7369 8.40957 48.5592 8.40957C49.3814 8.40957 49.9543 9.06561 49.8355 9.86947C49.7167 10.6733 48.9476 11.3294 48.1253 11.3294C47.3031 11.3294 46.7302 10.6733 46.849 9.86947ZM52.4084 12.6569C52.3581 12.6592 52.3093 12.6388 52.2755 12.6015C52.2417 12.5641 52.2263 12.5136 52.2336 12.4637L53.4896 4.50619C53.5143 4.39437 53.6128 4.3143 53.7273 4.31295H55.1572C55.2076 4.3107 55.2563 4.33103 55.2902 4.36841C55.324 4.40579 55.3394 4.4563 55.3321 4.50619L54.0761 12.4637C54.0522 12.5763 53.9535 12.6573 53.8384 12.6588L52.4084 12.6569Z" fill="#009EE3"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.10548 1.33325H6.85234C7.90741 1.33325 9.15958 1.36707 9.9963 2.1062C10.5557 2.59992 10.8494 3.38543 10.7818 4.2318C10.5519 7.09267 8.84074 8.69557 6.54509 8.69557H4.69775C4.38277 8.69557 4.17504 8.90427 4.08615 9.46852L3.57021 12.7535C3.53639 12.9661 3.44461 13.0917 3.28036 13.1072H0.968278C0.71224 13.1072 0.621418 12.9139 0.688085 12.4869L2.34992 1.95741C2.41659 1.53422 2.64944 1.33325 3.10548 1.33325Z" fill="#113984"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.14014 9.13528L4.79424 4.99325C4.85125 4.62997 5.05028 4.45605 5.44642 4.45605H9.18941C9.80874 4.45605 10.3102 4.55267 10.7025 4.73142C10.3266 7.27828 8.67927 8.69277 6.52275 8.69277H4.6783C4.43096 8.69374 4.24932 8.81741 4.14014 9.13528Z" fill="#172C70"></path>
                  </svg>
                </div>
                <p className="paypal-learnmore">Learn More</p>
              </div>


              {/* <Link to="/cart"> */}
              <button className="addtobag02">SECURE CHECHOUT</button>
              {/* </Link> */}




            </div>
            <p className="promo-p">Have a promo code?</p>
            <div className="promocode-cont">
              <input placeholder="Enter Promo Code" type="text" />
              <button>Apply Code</button>
            </div>
            <p className="ddiscount-p">Delivery discounts will be applied at checkout</p>
            <hr className="d-freehr" />
            <p className="delivery-to">Delivery to</p>
            <div className="ukflag-div">
              <img src={imagediv} alt="" />
              <p>United Kingdom</p>
            </div>
          </div>
        )}

      </div>

      <div className="there02">
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
      <Footer />

    </div>
  )
}

export default Cart