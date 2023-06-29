import Navigation from "../component/Navigation"
import image1 from "../component/images/846570602.jpg"
import image2 from "../component/images/846570602M1.jpg"
import image3 from "../component/images/846570602M2.jpg"
import image4 from "../component/images/846570602M3.jpg"
import image5 from "../component/images/846570645.jpg"
import image6 from "../component/images/846570641.jpg"
import image7 from "../component/images/846570610.jpg"
import image8 from "../component/images/846570601.jpg"
import image9 from "../component/images/newimg1.jpeg"
import image10 from "../component/images/newimg2.jpeg"
import image11 from "../component/images/newimg3.jpeg"
import { IoIosHeartEmpty, IoIosStar, IoIosStarHalf,IoIosSquare,IoIosSquareOutline,IoMdAdd, } from "react-icons/io";
import { FaChevronDown,FaChevronUp } from "react-icons/fa";
import {  IoChevronForward } from "react-icons/io5";
import { useState } from "react";




function Product() {

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
          <div className="slanted-line"></div>
          <p className="clothing-innerdivp1">Mens Shirt</p>
          <div className="slanted-line"></div>
          <p className="clothing-innerdivp1">Pale Grey Short Sleeves Muscle Fit Oxford Shirt</p>
        </div>
      </div>

      <div className="product-details">
        <div className="product-details-div1">
          <img src={image1} alt="" />
        </div>

        <div className="product-details-div2">
          <img src={image2} alt="" />
        </div>


        <div className="product-details-div3">
          <div className="product-firstd">
            <p className="product-firstdp">Pale Grey Short Sleeve Muscle Fit <br /> Oxford Shirt</p>
            <IoIosHeartEmpty className="newheart" />
          </div>
          <div className="star-cont">
            <IoIosStar className="strr" />
            <IoIosStar className="strr" />
            <IoIosStar className="strr" />
            <IoIosStar className="strr" />
            <IoIosStarHalf className="strr" />
            <p className="rating">4.6 (6)</p>
          </div>
          <p className="pricing">&pound;17.99</p>
          <p className="interest">Pay in 3 interest free payment</p>
          <div className="paypal-div">
<div className="paypal-innerd1">
<svg width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.0441 0.685791H6.14227C3.23917 0.685791 0.885742 3.08097 0.885742 6.03558V17.6216C0.885742 20.5762 3.23917 22.9714 6.14227 22.9714H35.0441C37.9472 22.9714 40.3006 20.5762 40.3006 17.6216V6.03558C40.3006 3.08097 37.9472 0.685791 35.0441 0.685791Z" fill="#FFB3C7"/>
<g clip-path="url(#clip0)">
<path d="M36.6677 13.6376C36.1427 13.6376 35.7171 14.0483 35.7171 14.5549C35.7171 15.0613 36.1427 15.4721 36.6677 15.4721C37.1926 15.4721 37.6183 15.0614 37.6183 14.5549C37.6183 14.0482 37.1926 13.6376 36.6677 13.6376ZM33.5403 12.9285C33.5403 12.235 32.9259 11.6729 32.168 11.6729C31.4102 11.6729 30.7957 12.235 30.7957 12.9285C30.7957 13.6221 31.4101 14.1843 32.168 14.1843C32.926 14.1843 33.5403 13.6221 33.5403 12.9285ZM35.0598 10.488V15.363H33.5454V15.0569C33.1175 15.3385 32.6011 15.504 32.044 15.504C30.57 15.504 29.375 14.3509 29.375 12.9285C29.375 11.5061 30.57 10.3531 32.044 10.3531C32.6011 10.3531 33.1175 10.5186 33.5454 10.8002V10.488L35.0598 10.488ZM21.4256 10.4881H19.875V15.363H21.4291V13.0901C21.4291 12.3213 22.2927 11.908 22.8919 11.908C22.898 11.908 22.9037 11.9086 22.9099 11.9087V10.4885C22.2949 10.4885 21.7292 10.7426 21.4256 11.1239L21.4256 10.4881ZM17.5632 12.9285C17.5632 12.235 16.9488 11.6729 16.1909 11.6729C15.433 11.6729 14.8186 12.235 14.8186 12.9285C14.8186 13.6221 15.433 14.1843 16.1909 14.1843C16.9488 14.1843 17.5632 13.6221 17.5632 12.9285ZM19.0827 10.488V15.363H17.5682V15.0569C17.1403 15.3385 16.6239 15.504 16.067 15.504C14.5928 15.504 13.3978 14.3509 13.3978 12.9285C13.3978 11.5061 14.5928 10.3531 16.067 10.3531C16.6239 10.3531 17.1404 10.5186 17.5682 10.8002V10.488L19.0827 10.488ZM25.1235 11.038V10.4883H23.6156V15.363H25.1421V12.804C25.1421 12.0618 25.6579 11.6983 26.279 11.6983C26.9446 11.6983 27.3272 12.082 27.3272 12.7939V15.363H28.8399V12.2651C28.8399 11.1293 27.904 10.3568 26.6839 10.3568C26.0789 10.3567 25.5063 10.538 25.1235 11.038ZM12.7769 15.363V8.31298H11.1918V15.363H12.7769ZM4.22852 15.363H5.90702V8.31166H4.22852V15.363ZM8.38233 12.3183L10.7025 15.363H8.62933L6.10783 12.0533L6.75859 11.5831C7.83779 10.803 8.4568 9.61069 8.4568 8.31165H10.0994C10.0994 9.8399 9.48214 11.2616 8.38233 12.3183Z" fill="#0A0B09"/>
</g>
<defs><svg width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.0441 0.685791H6.14227C3.23917 0.685791 0.885742 3.08097 0.885742 6.03558V17.6216C0.885742 20.5762 3.23917 22.9714 6.14227 22.9714H35.0441C37.9472 22.9714 40.3006 20.5762 40.3006 17.6216V6.03558C40.3006 3.08097 37.9472 0.685791 35.0441 0.685791Z" fill="#FFB3C7"/>
<g clip-path="url(#clip0)">
<path d="M36.6677 13.6376C36.1427 13.6376 35.7171 14.0483 35.7171 14.5549C35.7171 15.0613 36.1427 15.4721 36.6677 15.4721C37.1926 15.4721 37.6183 15.0614 37.6183 14.5549C37.6183 14.0482 37.1926 13.6376 36.6677 13.6376ZM33.5403 12.9285C33.5403 12.235 32.9259 11.6729 32.168 11.6729C31.4102 11.6729 30.7957 12.235 30.7957 12.9285C30.7957 13.6221 31.4101 14.1843 32.168 14.1843C32.926 14.1843 33.5403 13.6221 33.5403 12.9285ZM35.0598 10.488V15.363H33.5454V15.0569C33.1175 15.3385 32.6011 15.504 32.044 15.504C30.57 15.504 29.375 14.3509 29.375 12.9285C29.375 11.5061 30.57 10.3531 32.044 10.3531C32.6011 10.3531 33.1175 10.5186 33.5454 10.8002V10.488L35.0598 10.488ZM21.4256 10.4881H19.875V15.363H21.4291V13.0901C21.4291 12.3213 22.2927 11.908 22.8919 11.908C22.898 11.908 22.9037 11.9086 22.9099 11.9087V10.4885C22.2949 10.4885 21.7292 10.7426 21.4256 11.1239L21.4256 10.4881ZM17.5632 12.9285C17.5632 12.235 16.9488 11.6729 16.1909 11.6729C15.433 11.6729 14.8186 12.235 14.8186 12.9285C14.8186 13.6221 15.433 14.1843 16.1909 14.1843C16.9488 14.1843 17.5632 13.6221 17.5632 12.9285ZM19.0827 10.488V15.363H17.5682V15.0569C17.1403 15.3385 16.6239 15.504 16.067 15.504C14.5928 15.504 13.3978 14.3509 13.3978 12.9285C13.3978 11.5061 14.5928 10.3531 16.067 10.3531C16.6239 10.3531 17.1404 10.5186 17.5682 10.8002V10.488L19.0827 10.488ZM25.1235 11.038V10.4883H23.6156V15.363H25.1421V12.804C25.1421 12.0618 25.6579 11.6983 26.279 11.6983C26.9446 11.6983 27.3272 12.082 27.3272 12.7939V15.363H28.8399V12.2651C28.8399 11.1293 27.904 10.3568 26.6839 10.3568C26.0789 10.3567 25.5063 10.538 25.1235 11.038ZM12.7769 15.363V8.31298H11.1918V15.363H12.7769ZM4.22852 15.363H5.90702V8.31166H4.22852V15.363ZM8.38233 12.3183L10.7025 15.363H8.62933L6.10783 12.0533L6.75859 11.5831C7.83779 10.803 8.4568 9.61069 8.4568 8.31165H10.0994C10.0994 9.8399 9.48214 11.2616 8.38233 12.3183Z" fill="#0A0B09"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="33.4286" height="9.40176" fill="white" transform="translate(4.22852 7.37146)"/>
</clipPath>
</defs>
</svg>
<clipPath id="clip0">
<rect width="33.4286" height="9.40176" fill="white" transform="translate(4.22852 7.37146)"/>
</clipPath>
</defs>
</svg>
</div>
<div className="paypal-innerd01">
{/* <svg width="26" height="26" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66074 19.0103L4.96793 16.9303H4.25115H0.87207L3.22719 1.74621C3.22719 1.74621 3.22719 1.64221 3.32958 1.64221H3.43198H9.16618C11.1117 1.64221 12.3405 2.05821 13.0572 2.78622C13.3644 3.20222 13.5692 3.51422 13.6716 3.93023C13.774 4.34623 13.774 4.86623 13.6716 5.59423V6.01024L13.9788 6.21824C14.286 6.32224 14.4908 6.53024 14.5932 6.73824C14.9004 7.05024 15.0028 7.46625 15.1052 7.98625C15.2076 8.50625 15.1052 9.02626 15.0028 9.75426C14.9004 10.4823 14.5932 11.2103 14.286 11.7303C13.9788 12.2503 13.5692 12.6663 13.1596 12.9783C12.7501 13.2903 12.2381 13.4983 11.6237 13.7063C11.1117 13.8103 10.3949 13.9143 9.78056 13.9143H9.47337C9.16618 13.9143 8.85899 14.0183 8.5518 14.2263C8.34701 14.4343 8.14221 14.7463 8.14221 15.0583V15.2663L7.52784 18.9063V19.0103V19.1143C7.52784 19.1143 7.52784 19.1143 7.42544 19.1143H4.66074V19.0103Z" fill="#253B80"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2851 5.69836C14.2851 5.80236 14.2851 5.90637 14.1827 6.01037C13.4659 9.96239 10.9061 11.3144 7.62946 11.3144H5.88877C5.47919 11.3144 5.17201 11.6264 5.06962 12.0424L4.25047 17.5544L4.04568 19.1144C3.94328 19.4264 4.14807 19.6344 4.45525 19.6344H7.42468C7.73186 19.6344 8.03904 19.4264 8.14143 19.0104V18.9064L8.6534 15.2664V15.0584C8.85819 14.7464 9.06298 14.4344 9.47255 14.4344H9.88213C12.7492 14.4344 15.0018 13.2904 15.7186 9.75439C16.0258 8.29838 15.821 7.15437 15.1042 6.21837C14.8994 6.01037 14.5922 5.80236 14.2851 5.69836Z" fill="#179BD7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4656 5.38646C13.3632 5.38646 13.2608 5.28246 13.1584 5.28246C13.056 5.28246 12.9536 5.17846 12.7488 5.17846C12.3393 5.07446 11.8273 5.07446 11.3153 5.07446H6.80976C6.70736 5.07446 6.60496 5.07446 6.50256 5.17846C6.29777 5.28246 6.09297 5.49046 6.09297 5.69847L5.17139 11.8345V12.0425C5.17139 11.6265 5.47858 11.3145 5.88817 11.3145H7.52654C10.8033 11.3145 13.3632 9.96249 14.1824 6.01047C14.1824 5.90647 14.1824 5.80247 14.2848 5.69847C14.08 5.59447 13.8752 5.49047 13.6704 5.38646C13.6704 5.38646 13.568 5.38646 13.4656 5.38646Z" fill="#222D65"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.09396 5.69833C6.09396 5.49033 6.29875 5.28233 6.50355 5.17833C6.60594 5.07433 6.70834 5.07433 6.81074 5.07433H11.3162C11.8282 5.07433 12.3402 5.07433 12.7498 5.17833C12.8522 5.17833 12.9546 5.17833 13.1594 5.28233C13.2618 5.28233 13.3642 5.38633 13.4665 5.38633C13.5689 5.38633 13.5689 5.38633 13.6713 5.49033C13.8761 5.59433 14.0809 5.69833 14.2857 5.80233C14.4905 4.34633 14.2857 3.30632 13.4665 2.47432C12.6474 1.33031 11.1114 0.914307 9.16587 0.914307H3.43163C3.02205 0.914307 2.71485 1.22631 2.61246 1.64231L0.257324 17.0344C0.257324 17.3464 0.462118 17.6584 0.76931 17.6584H4.35321L5.27478 11.9384L6.09396 5.69833Z" fill="#253B80"/>
</svg> */}

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
          <div className="rectangle-cont01">
         <IoIosSquare className="rectangle-icon01"/>
         <IoIosSquareOutline className="rectangle-icon02"/>
         <IoIosSquare className="rectangle-icon03"/>
         <IoIosSquare className="rectangle-icon04"/>
         <IoIosSquare className="rectangle-icon05"/>
         
         </div>

<div className="wrapper01">
<div className="new-sorted">
<p>Choose Size <FaChevronDown className="sorted-arrow"/></p>
</div>
<p className="size-guide">Size Guide</p>
</div>


<button className="addtobag">ADD TO BAG</button>



        </div>

      </div>
   <div className="below-section">
   <div className="product-details-div1">
          <img src={image3} alt="" />
        </div>

        <div className="product-details-div2">
          <img src={image4} alt="" />
        </div>
<div className="">
  <div className="product-section2">
  <p className="freep">FREE express Click & collect <br /> Orders over&pound;35</p>
  <p className="freep2">Plus, FREE home delivery option available </p>
  <div className="lastd-flex">
    <p>Free Delivery</p>
    <hr />
    <p>Free Returns</p>
  </div>
  </div>
  <div className="below-productsec">
  <p className="bp-p">product Details & Care Guide</p>
  <div className="product-line003"></div>
  <p className="style-p">Smart styles need an update? Meet the white Oxford <br /> shirt your wardrobe’s been missing.</p>

  <p className="collared-p">- Collared neckline</p>
  <div className="wraped-div">
  <div className="product-line0003"></div>
  <IoMdAdd className="addme"/>
  <p className="show-more">Show more</p>
  <div className="product-line0003"></div>
  </div>
  </div>

</div>


   </div>
<p className="whatyoulike"> We Think You'll Like</p>
<div className="product-line00003"></div>

   <div className="after-below">
      <div className="after-div1">
        <div className="inner-after01">
        <img  src={image5} alt="" />
        <div className="heart-container">
          <IoIosHeartEmpty className="emptyheart"/>
        </div>
        </div>

        <div className="inner-after02">
          <p className="inner-afterp">Pale Blue Short Sleeve Muscle Fit Oxford Shirt</p>
          <p className="inner-afterprice">&pound;17.99</p>
          <div className="new-sorted01">
<p>Choose Size <FaChevronDown className="sorted-arrow01"/></p>
</div>
<div>
<button className="addtobag01">ADD TO BAG</button>
</div>


        </div>

      </div>
      <div className="after-div1">
        <div className="inner-after01">
        <img  src={image6} alt="" />
        <div className="heart-container02">
          <IoIosHeartEmpty className="emptyheart"/>
        </div>
        </div>

        <div className="inner-after02">
          <p className="inner-afterp">Navy Short Sleeve Muscle Fit Oxford <br /> Shirt</p>
          <p className="inner-afterprice">&pound;17.99</p>
          <div className="new-sorted01">
<p>Choose Size <FaChevronDown className="sorted-arrow01"/></p>
</div>
<div>
<button className="addtobag01">ADD TO BAG</button>
</div>


        </div>

      </div>
      <div className="after-div1">
        <div className="inner-after01">
        <img  src={image7} alt="" />
        <div className="heart-container03">
          <IoIosHeartEmpty className="emptyheart"/>
        </div>
        </div>

        <div className="inner-after02">
          <p className="inner-afterp">White Short Sleeve Muscle Fit Oxford Shirt</p>
          <p className="inner-afterprice">&pound;17.99</p>
          <div className="new-sorted01">
<p>Choose Size <FaChevronDown className="sorted-arrow01"/></p>
</div>
<div>
<button className="addtobag01">ADD TO BAG</button>
</div>


        </div>

      </div>
      <div className="after-div1">
        <div className="inner-after01">
        <img  src={image8} alt="" />
        <div className="heart-container04">
          <IoIosHeartEmpty className="emptyheart"/>
        </div>
        </div>

        <div className="inner-after02">
          <p className="inner-afterp">Black Short Sleeve Muscle Fit Oxford Shirt</p>
          <p className="inner-afterprice">&pound;17.99</p>
          <div className="new-sorted01">
<p>Choose Size <FaChevronDown className="sorted-arrow01"/></p>
</div>
<div>
<button className="addtobag01">ADD TO BAG</button>
</div>
<div className="nextforward">
<IoChevronForward className="icon-latest"/>
</div>



        </div>

      </div>
   </div>



<p className="whatyoulike"> Shop The Look</p>
<div className="product-line00003"></div>

   <div className="after-below">
      <div className="after-div1">
        <div className="inner-after01">
        <img  src={image9} alt="" />
        <div className="heart-container001">
          <IoIosHeartEmpty className="emptyheart"/>
        </div>
        </div>

        <div className="inner-after02">
          <p className="inner-afterp">Black Skinny Suit Trouser</p>
          <p className="inner-afterprice">&pound;24.99</p>
          <div className="new-sorted01">
<p>Choose Size <FaChevronDown className="sorted-arrow01"/></p>
</div>
<div>
<button className="addtobag01">ADD TO BAG</button>
</div>


        </div>

      </div>
      <div className="after-div1">
        <div className="inner-after01">
        <img  src={image10} alt="" />
        <div className="heart-container002">
          <IoIosHeartEmpty className="emptyheart"/>
        </div>
        </div>

        <div className="inner-after02">
          <p className="inner-afterp">5 Pack Black Ribbed Ankle Socks</p>
          <p className="inner-afterprice">&pound;12.99</p>
          <div>
<p className="one-size">One Size</p>
</div>
<div>
<button className="addtobag01">ADD TO BAG</button>
</div>


        </div>

      </div>
      <div className="after-div1">
        <div className="inner-after01">
        <img  src={image11} alt="" />
        <div className="heart-container003">
          <IoIosHeartEmpty className="emptyheart"/>
        </div>
        </div>

        <div className="inner-after02">
          <p className="inner-afterp">Black Leather-Look Formal Belt</p>
          <p className="inner-afterprice">&pound;7.99</p>
          <div className="new-sorted01">
<p>Choose Size <FaChevronDown className="sorted-arrow01"/></p>
</div>
<div>
<button className="addtobag01">ADD TO BAG</button>
</div>


        </div>

      </div>
      {/* <div className="after-div1">
        <div className="inner-after01">
        <img  src={image8} alt="" />
        <div className="heart-container04">
          <IoIosHeartEmpty className="emptyheart"/>
        </div>
        </div>

        <div className="inner-after02">
          <p className="inner-afterp">Black Short Sleeve Muscle Fit Oxford Shirt</p>
          <p className="inner-afterprice">&pound;17.99</p>
          <div className="new-sorted01">
<p>Choose Size <FaChevronDown className="sorted-arrow01"/></p>
</div>
<div>
<button className="addtobag01">ADD TO BAG</button>
</div>
<div className="nextforward">
<IoChevronForward className="icon-latest"/>
</div>



        </div>

      </div> */}
   </div>

   <div className="review-div1">
    <p className="review-div1p">Reviews</p>
   </div>
<div className="divided">
  <div>
  <p className="ratingsnapshot">Rating Snapshot</p>
   <p className="ratingsnapshot2">Select a row below to filter reviews.</p>
  </div>
  <div className="average-div">
    <p>Average Customer Rating</p>
  </div>

</div>

   <div className="two-reviews">
    <div className="review1">
    <div className="container-divvv">
    <p className="5star">5<IoIosStar className="realstar"/></p>
    <input className="input-star1"  type="text" />
    <p className="star2">5</p>
   </div>
   <div className="container-divvv">
    <p className="5star">4<IoIosStar className="realstar"/></p>
    <input className="input-star2" type="text" />
    <p className="star2">1</p>
   </div>
   <div className="container-divvv">
    <p className="5star">3<IoIosStar className="realstar"/></p>
    <input  type="text" />
    <p className="star2">0</p>
   </div>
   <div className="container-divvv">
    <p className="5star">2<IoIosStar className="realstar"/></p>
    <input  type="text" />
    <p className="star2">0</p>
   </div>
   <div className="container-divvv">
    <p className="5star">1<IoIosStar className="realstar"/></p>
    <input  type="text" />
    <p className="star2">0</p>
   </div>
    </div>
  
    <div className="review02">
  <div className="overall">
    <p className="overallp1">Overall</p>
    <div className="middlestar-div">
    <IoIosStar className="middlestar"/>
    <IoIosStar className="middlestar"/>
    <IoIosStar className="middlestar"/>
    <IoIosStar className="middlestar"/>
    <IoIosStar className="middlestar"/>
    </div>


    <p className="star4">4.5</p>
  </div>
  <div className="overall2">
    <p className="overallp1">Quality of product</p>
    <div className="middlestar-div2">
    <input className="middlestar-input" type="text" />
    </div>


    <p className="star4">4.5</p>
  </div>
  <div className="diff-style">
<p className="fit">Fit</p>
<div className="house">
  <input type="text" />
  <div className="house-div1">
    <p className="toosmall">Too small</p>
    <p className="toobig">Too large</p>
  </div>
</div>
    </div>
    <div className="overall2">
    <p className="overallp1">Comfort</p>
    <div className="middlestar-div2">
    <input className="middlestar-input1" type="text" />
    </div>


    <p className="star4">4.5</p>
  </div>
    </div>



   </div>

   <div className="another-sortedby"></div>

    </div>
  )
}

export default Product