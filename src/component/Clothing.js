import Navigation from "./Navigation"
import {  IoChevronForward,IoBagOutline } from "react-icons/io5";
import { FaChevronDown,FaChevronUp } from "react-icons/fa";
import imagee01 from "../component/images/8465706453.jpg"
import imagee02 from "./images/8465706412.jpg"
import imagee03 from "../component/images/8465706103.jpg"
import imagee04 from "./images/8465706023.jpg"
import image01 from "./images/8465706012.jpg"
import image02 from "./images/8464481093.jpg"
import image03 from "./images/8341611613.jpg"
import image04 from "./images/8712084162.jpg"
import { IoIosHeartEmpty,IoIosSquare,IoIosSquareOutline } from "react-icons/io";
import Promoimage from "./images/promo-image.jpeg"
import imaage01 from "./images/871206031.jpg"
import imaage02 from "./images/867439701M54.jpg"
import imaage03 from "./images/846596341.jpg"
import imaage04 from "./images/846596310.jpg"

import imaaage01 from "./images/846453981.jpg"
import imaaage02 from "./images/846450719.jpg"
import imaaage03 from "./images/839043101.jpg"
import imaaage04 from "./images/839042140.jpg"

import imaaage001 from "./images/834161140.jpg"
import imaaage002 from "./images/834161117.jpg"
import imaaage003 from "./images/834161103.jpg"
import imaaage004 from "./images/834161102.jpg"

import maaage001 from "./images/834161101.jpg"
import maaage002 from "./images/820921902.jpg"
import maaage003 from "./images/820921541.jpg"
import maaage004 from "./images/808380742.jpg"

import maaage01 from "./images/808380741.jpg"
import maaage02 from "./images/808380707.jpg"
import maaage03 from "./images/808380701.jpg"
import maaage04 from "./images/808377745.jpg"

import aaage01 from "./images/808377744.jpg"
import aaage02 from "./images/808377741.jpg"
import aaage03 from "./images/808377707.jpg"
import aaage04 from "./images/808377701.jpg"

import aage01 from "./images/831098404M5.jpg"
import aage02 from "./images/826097201.jpg"
import aage03 from "./images/new1.webp"
import aage04 from "./images/8504500993.jpg"

import age01 from "./images/8504499992.jpg"
import age02 from "./images/8504485992.jpg"
import age03 from "./images/new2.webp"
import age04 from "./images/new3.webp"


import ge01 from "./images/new4.webp"
import ge02 from "./images/new5.webp"
import ge03 from "./images/new6.webp"
import ge04 from "./images/new7.webp"

import e01 from "./images/new8.webp"
import e02 from "./images/new9.webp"
import e03 from "./images/new10.webp"
import e04 from "./images/new11.webp"
import Footer from "./Footer";
import { Link } from "react-router-dom"

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

      <div className="Sorted-div-container">
        <div className="sorted">
            <p className="sorted-p"><span >SORT BY:</span>Best Match <FaChevronDown className="arrowups-icon"/></p>
        </div>

        <div className="sorted02">
          <p className="sorted02-p">CATEGORY</p>
          <FaChevronDown className="forward-icon1"/>
          <div className="sorted02-div1"></div>

          <p className="sorted02-p">STYLE</p>
          <FaChevronDown className="forward-icon1"/>
          <div className="sorted02-div1"></div>

          <p className="sorted02-p">SIZE</p>
          <FaChevronDown className="forward-icon1"/>
          <div className="sorted02-div1"></div>

          <p className="sorted02-p">BRAND</p>
          <FaChevronDown className="forward-icon1"/>
          <div className="sorted02-div1"></div>

          <p className="sorted02-p">COLOUR</p>
          <FaChevronDown className="forward-icon1"/>
          <div className="sorted02-div1"></div>

          <p className="sorted02-p">PRICE</p>
          <FaChevronDown className="forward-icon1"/>
          <div className="sorted02-div1"></div>
        </div>
      </div>

      <p className="content-p">Showing 48 of 1291 items </p>
        <Link to="/product" className="single-product-div">
        <div className="clothing-section02">
        <div className="clothing-innerdsect01">
          <img src={imagee01} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">Pale Blue Short Sleeve Muscle Fit Oxford shirt</p> <IoIosHeartEmpty className="heart-icon" />
          
          </div>
          <p className="price-p">&pound;17.99</p>
         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />

        </div>
        <div className="clothing-innerdsect01">
          <img src={imagee02} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">Navy Short Sleeve Muscle Fit Oxford shirt</p> <IoIosHeartEmpty className="heart-icon" />
          
          </div>
          <p className="price-p">&pound;17.99</p>
         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={imagee03} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">White Short Sleeve Muscle Fit Oxford <br /> shirt</p> <IoIosHeartEmpty className="heart-icon" />
          
          </div>
          <p className="price-p">&pound;17.99</p>
         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={imagee04} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">Pale Grey Short Sleeve Muscle Fit Oxford shirt</p> <IoIosHeartEmpty className="heart-icon" />
          
          </div>
          <p className="price-p">&pound;17.99</p>
         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
      </div>
        </Link>


      <div className="clothing-section0-2">
        <div className="clothing-innerdsect01">
          <img src={image01} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">Pale Blue Short Sleeve Muscle Fit Oxford shirt</p> <IoIosHeartEmpty className="heart-icon" />
          
          </div>
          <p className="price-p">&pound;17.99</p>
         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />

        </div>
        <div className="clothing-innerdsect01">
          <img src={image02} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">Navy Short Sleeve Muscle Fit Oxford shirt</p> <IoIosHeartEmpty className="heart-icon" />
          
          </div>
          <p className="price-p">&pound;22.99</p>
         {/* <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div> */}
         <hr className="product-line-1" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={image03} alt="" />
          <div className="dicription-cont">
            <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div>
          <p className="clothinh-innerdsecp">Dark Red Pocket Front </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          <p className="block-p">long sleeve Hoodie</p>
          <div className="price-cont">
          <p className="price-p1">&pound;17.99</p>
          <p className="price-p2">&pound;17.99</p>
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={image04} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">Pale Grey Short Sleeve Muscle Fit Oxford shirt</p> <IoIosHeartEmpty className="heart-icon" />
          
          </div>
          <p className="price-p">&pound;25.99</p>
         {/* <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         
         </div> */}
         <hr className="product-line-1" />
        </div>
      </div>


      <div className="clothing-section0-2">
        <div className="clothing-innerdsect01">
          <img src={imaage01} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">Light Green Rose Script Sweatshirt</p>
           <IoIosHeartEmpty className="heart-icon-1" />
          
          </div>
          <p className="price-p">&pound;17.99</p>
         {/* <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div> */}
         <hr className="product-line-1" />

        </div>
        <div className="clothing-innerdsect01">
          <img src={imaage02} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">3 Pack Black Cotton-Blend Boxers </p> <IoIosHeartEmpty className="heart-icon-1" />
          
          </div>
          <p className="price-p">&pound;22.99</p>
         {/* <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div> */}
         <hr className="product-line-1" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={imaage03} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Navy Poplin Short Sleeve Regular Fit shirt </p>
   
           <IoIosHeartEmpty className="heart-icon" />
           <div className="banner-div0">
          <IoBagOutline className="bag-tag"/>
          <p className="banner-divp"><span>Great Choice</span> 5 sold</p>
          </div>
   
          
          </div>
          {/* <p className="block-p">long sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;17.99</p>
          {/* <p className="price-p2">&pound;17.99</p> */}
          </div>

         <div className="rectangle-cont">
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>

         <IoIosSquare className="rectangle-icon3"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={imaage04} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">White Poplin Short Sleeve Regular Fit shirt</p> <IoIosHeartEmpty className="heart-icon" />
          <div className="banner-div">
          <IoBagOutline className="bag-tag"/>
          <p className="banner-divp"><span>Great Choice</span> 15 sold</p>
          </div>
          
          </div>
          <p className="price-p">&pound;25.99</p>
          <div className="rectangle-cont">
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>

         <IoIosSquare className="rectangle-icon3"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line" />
        </div>
      </div>

      <div className="clothing-section0-2">
        <div className="clothing-innerdsect01">
          <img src={imaaage01} alt="" />
          <p className="last-chance">Last chance</p>
          <div className="dicription-cont">

          <p className="clothinh-innerdsecp">Orange Geometric Tile Short Short Sleeve Shirt</p>
           <IoIosHeartEmpty className="heart-icon-1" />
          
          </div>
          <p className="price-p">&pound;22.99</p>
         {/* <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div> */}
         <hr className="product-line" />

        </div>
        <div className="clothing-innerdsect01">
          <img src={imaaage02} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">White Paisley Short Sleeve Shirt </p> <IoIosHeartEmpty className="heart-icon-1" />
          
          </div>
          <p className="price-p">&pound;22.99</p>
         {/* <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div> */}
         <hr className="product-line0" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={imaaage03} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Black Slime Fit Jeans </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          {/* <p className="block-p">long sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;20.99</p>
          {/* <p className="price-p2">&pound;17.99</p> */}
          </div>

         <div className="rectangle-cont">
         {/* <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>

         <IoIosSquare className="rectangle-icon3"/> */}
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={imaaage04} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">Blue Mid Rise Skinny Stretch Jeans</p> <IoIosHeartEmpty className="heart-icon" />
          
          </div>
          <p className="price-p">&pound;20.99</p>
          <div className="rectangle-cont">
         {/* <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>

         <IoIosSquare className="rectangle-icon3"/> */}
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line" />
        </div>
      </div>

      <div className="clothing-section0-2">
      <div className="clothing-innerdsect01">
          <img src={imaaage001} alt="" />
          <div className="dicription-cont">
            <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div>
          <p className="clothinh-innerdsecp">Blue Pocket Front Long </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          <p className="block-p"> sleeve Hoodie</p>
          <div className="price-cont">
          <p className="price-p1">&pound;16.99</p>
          <p className="price-p2">&pound;21.99</p>
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={imaaage002} alt="" />
          <div className="dicription-cont">
            <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div>
          <p className="clothinh-innerdsecp">Camel Pocket Front Long </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          <p className="block-p"> sleeve Hoodie</p>
          <div className="price-cont">
          <p className="price-p1">&pound;16.99</p>
          <p className="price-p2">&pound;21.99</p>
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={imaaage003} alt="" />
          <div className="dicription-cont">
            <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div>
          <p className="clothinh-innerdsecp">Dark Grey Pocket Front </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          <p className="block-p">Long sleeve Hoodie</p>
          <div className="price-cont">
          <p className="price-p1">&pound;16.99</p>
          <p className="price-p2">&pound;21.99</p>
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={imaaage004} alt="" />
          <div className="dicription-cont">
            <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div>
          <p className="clothinh-innerdsecp">Pale Grey Pocket Front </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          <p className="block-p">Long Sleeve Hoodie</p>
          <div className="price-cont">
          <p className="price-p1">&pound;17.99</p>
          <p className="price-p2">&pound;17.99</p>
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
      </div>

      <div className="clothing-section0-2">
      <div className="clothing-innerdsect01">
          <img src={maaage001} alt="" />
          <div className="dicription-cont">
            <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div>
          <p className="clothinh-innerdsecp">Black Pocket Front Long </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          <p className="block-p"> sleeve Hoodie</p>
          <div className="price-cont">
          <p className="price-p1">&pound;16.99</p>
          <p className="price-p2">&pound;21.99</p>
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={maaage002} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Pale Grey Skinny Suit Trouser </p>
   
           <IoIosHeartEmpty className="heart-icon00" />
   
          
          </div>
          {/* <p className="block-p"> sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;27.99</p>
          {/* <p className="price-p2">&pound;21.99</p> */}
          </div>

         {/* <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div> */}
         <hr className="product-line-1" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={maaage003} alt="" />
          <div className="dicription-cont">
            <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div>
          <p className="clothinh-innerdsecp">Blue Check Skinny Suits </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          <p className="block-p">Trouser</p>
          <div className="price-cont">
          <p className="price-p1">&pound;20.99</p>
          <p className="price-p2">&pound;27.99</p>
          </div>

         {/* <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div> */}
         <hr className="product-line-1" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={maaage004} alt="" />
          <div className="dicription-cont">
            <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div>
          <p className="clothinh-innerdsecp">Indigo Slime Suit Jacket </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          {/* <p className="block-p">Long Sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p1">&pound;39.99</p>
          <p className="price-p2">&pound;52.99</p>
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line" />
        </div>
      </div>


      <div className="clothing-section0-2">
      <div className="clothing-innerdsect01">
          <img src={maaage01} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Navy Slime Suit Jacket </p>
   
           <IoIosHeartEmpty className="heart-icon00" />
   
          
          </div>
          {/* <p className="block-p"> sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;52.99</p>
          {/* <p className="price-p2">&pound;21.99</p> */}
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={maaage02} alt="" />
          <div className="dicription-cont">
            <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div>
          <p className="clothinh-innerdsecp">Gray Marl Slim Suit Jacket </p>
   
           <IoIosHeartEmpty className="heart-icon09" />
   
          
          </div>
          {/* <p className="block-p">Long Sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p1">&pound;39.99</p>
          <p className="price-p2">&pound;52.99</p>
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={maaage03} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Black Slime Suit Jacket </p>
   
           <IoIosHeartEmpty className="heart-icon00" />
   
          
          </div>
          {/* <p className="block-p">Trouser</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;52.99</p>
          {/* <p className="price-p2">&pound;27.99</p> */}
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={maaage04} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Bright Blue Skinny Fit Suit Jacket </p>
   
           <IoIosHeartEmpty className="heart-icon000" />
   
          
          </div>
          {/* <p className="block-p">Long Sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;52.99</p>
          {/* <p className="price-p2">&pound;52.99</p> */}
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
      </div>

      <div className="clothing-section0-2">
      <div className="clothing-innerdsect01">
          <img src={aaage01} alt="" />
          <div className="dicription-cont">
            <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div>
          <p className="clothinh-innerdsecp">Bright Blue Skinny Fit </p>
   
           <IoIosHeartEmpty className="heart-icon0000" />
   
          
          </div>
          <p className="block-p"> Jacket</p>
          {/* <p className="block-p">Long Sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p1">&pound;39.74</p>
          <p className="price-p2">&pound;52.99</p>
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={aaage02} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Navy Skinny Fit Suit Jacket </p>
   
           <IoIosHeartEmpty className="heart-icon000" />
   
          
          </div>
          {/* <p className="block-p">Trouser</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;52.99</p>
          {/* <p className="price-p2">&pound;27.99</p> */}
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={aaage03} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Grey Marl Skinny Fit Suit Jacket </p>
   
           <IoIosHeartEmpty className="heart-icon000" />
   
          
          </div>
          {/* <p className="block-p">Trouser</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;52.99</p>
          {/* <p className="price-p2">&pound;27.99</p> */}
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={aaage04} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Bright Blue Skinny Fit Suit Jacket </p>
   
           <IoIosHeartEmpty className="heart-icon000" />
   
          
          </div>
          {/* <p className="block-p">Long Sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;52.99</p>
          {/* <p className="price-p2">&pound;52.99</p> */}
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div>
         <hr className="product-line" />
        </div>
      </div>

      <div className="clothing-section0-2">
      <div className="clothing-innerdsect01">
          <img src={aage01} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">3 Pack Grey Cotton-Blend Boxers </p>
   
           <IoIosHeartEmpty className="heart-icon0000" />
   
          
          </div>
          {/* <p className="block-p"> Jacket</p> */}
          {/* <p className="block-p">Long Sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;11.74</p>
          {/* <p className="price-p2">&pound;52.99</p> */}
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         {/* <IoIosSquareOutline className="rectangle-icon2"/> */}
         <IoIosSquare className="rectangle-icon3"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={aage02} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Black Faux Fur Trim Hooded Paka Jacket</p>
   
           <IoIosHeartEmpty className="heart-icon000" />
   
          
          </div>
          {/* <p className="block-p">Trouser</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;64.99</p>
          {/* <p className="price-p2">&pound;27.99</p> */}
          </div>

         <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         {/* <IoIosSquareOutline className="rectangle-icon2"/> */}
         <IoIosSquare className="rectangle-icon3"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
          */}
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={aage03} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Threadbare Blacked Cuffed Cargo Trouser </p>
   
           <IoIosHeartEmpty className="heart-iconn" />
   
          
          </div>
          {/* <p className="block-p">Trouser</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;30.00</p>
          {/* <p className="price-p2">&pound;27.99</p> */}
          </div>

         {/* <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div> */}
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={aage04} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">5 Multicoloured Colour Black </p>
   
           <IoIosHeartEmpty className="heart-icon000" />
   
          
          </div>
          <p className="block-p"> Strecth Socks</p>
          {/* <p className="block-p">Long Sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;12.99</p>
          {/* <p className="price-p2">&pound;52.99</p> */}
          </div>

         {/* <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div> */}
         <hr className="product-line" />
        </div>
      </div>

      <div className="clothing-section0-2">
      <div className="clothing-innerdsect01">
          <img src={age01} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">5 Pack Multicoloured Block Socks </p>
   
           <IoIosHeartEmpty className="heart-icon0000" />
   
          
          </div>
          {/* <p className="block-p"> Jacket</p> */}
          {/* <p className="block-p">Long Sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;12.74</p>
          {/* <p className="price-p2">&pound;52.99</p> */}
          </div>

         <div className="rectangle-cont">
         {/* <IoIosSquare className="rectangle-icon1"/> */}
         {/* <IoIosSquareOutline className="rectangle-icon2"/> */}
         {/* <IoIosSquare className="rectangle-icon3"/> */}
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line-111" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={age02} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">5 Pack Grey Black and Khaki Mixed</p>
   
           <IoIosHeartEmpty className="heart-icon0000" />
   
      
          </div>
          <p className="block-p"> Pattern Socks</p>
          {/* <p className="block-p">Trouser</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;11.99</p>
          {/* <p className="price-p2">&pound;27.99</p> */}
          </div>

         <div className="rectangle-cont">
         {/* <IoIosSquare className="rectangle-icon1"/> */}
         {/* <IoIosSquareOutline className="rectangle-icon2"/> */}
         {/* <IoIosSquare className="rectangle-icon3"/> */}
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
          */}
         </div>
         <hr className="product-line-11" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={age03} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">White Long Sleeve Muscle Fit Oxford Shirt</p>
   
           <IoIosHeartEmpty className="heart-iconn" />
   
          
          </div>
          {/* <p className="block-p">Trouser</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;19.99</p>
          {/* <p className="price-p2">&pound;27.99</p> */}
          </div>

         <div className="rectangle-cont">
         {/* <IoIosSquare className="rectangle-icon1"/> */}

         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
          */}
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={age04} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Black Long Sleeve Muscle Fit Oxford Shirt </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          {/* <p className="block-p"> Strecth Socks</p> */}
          {/* <p className="block-p">Long Sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;19.99</p>
          {/* <p className="price-p2">&pound;52.99</p> */}
          </div>

         { <div className="rectangle-cont">
         {/* <IoIosSquare className="rectangle-icon1"/> */}

         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div> }
         <hr className="product-line" />
        </div>
      </div>

      <div className="clothing-section0-2">
      <div className="clothing-innerdsect01">
          <img src={ge01} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Navy Poplin Short Sleeve Muscle Fit Shirt </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          {/* <p className="block-p"> Jacket</p> */}
          {/* <p className="block-p">Long Sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;18.74</p>
          {/* <p className="price-p2">&pound;52.99</p> */}
          </div>

          <div className="rectangle-cont">
         {/* <IoIosSquare className="rectangle-icon1"/>  */}
          <IoIosSquareOutline className="rectangle-icon2"/> 
          <IoIosSquare className="rectangle-icon3"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
          */}
         </div>
         <hr className="product-line-11" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={ge02} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">White Poplin Short Sleeve Muscle Fit Shirt</p>
   
           <IoIosHeartEmpty className="heart-icon0000" />
   
      
          </div>
          {/* <p className="block-p"> Pattern Socks</p> */}
          {/* <p className="block-p">Trouser</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;18.99</p>
          {/* <p className="price-p2">&pound;27.99</p> */}
          </div>

         <div className="rectangle-cont">
         {/* <IoIosSquare className="rectangle-icon1"/>  */}
          <IoIosSquareOutline className="rectangle-icon2"/> 
          <IoIosSquare className="rectangle-icon3"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
          */}
         </div>
         <hr className="product-line-11" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={ge03} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Blue Poplin Short Sleeve Muscle Fit Shirt</p>
   
           <IoIosHeartEmpty className="heart-iconn" />
   
          
          </div>
          {/* <p className="block-p">Trouser</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;15.99</p>
          {/* <p className="price-p2">&pound;27.99</p> */}
          </div>

         <div className="rectangle-cont">
         {/* <IoIosSquare className="rectangle-icon1"/> */}

         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
          <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         {/* <IoIosSquare className="rectangle-icon4"/> */}
         {/*<IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
          */}
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={ge04} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Navy Popline Short Sleeve Muscle Fit Shirt </p>
   
           <IoIosHeartEmpty className="heart-icon" />
   
          
          </div>
          {/* <p className="block-p"> Strecth Socks</p> */}
          {/* <p className="block-p">Long Sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;15.99</p>
          {/* <p className="price-p2">&pound;52.99</p> */}
          </div>

         { <div className="rectangle-cont">
         {/* <IoIosSquare className="rectangle-icon1"/> */}

         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
          <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         {/*<IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div> }
         <hr className="product-line" />
        </div>
      </div>

      <div className="clothing-section0-2">
        <div className="clothing-innerdsect01">
          <img src={e01} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">White Poplin Short Sleeve Muscle Fit Shirt</p>
           <IoIosHeartEmpty className="heart-icon-1" />
          
          </div>
          <p className="price-p">&pound;15.99</p>
          <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         {/* <IoIosSquare className="rectangle-icon5"/> */}
         
         </div> 
         <hr className="product-line1n" />

        </div>
        <div className="clothing-innerdsect01">
          <img src={e02} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp"> Black Poplin Short Sleeve Muscle Fit Shirt </p> <IoIosHeartEmpty className="heart-icon-1" />
          
          </div>
          <p className="price-p">&pound;22.99</p>
         {/* <div className="rectangle-cont">
         <IoIosSquare className="rectangle-icon1"/>
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         
         </div> */}
         <hr className="product-line-1" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={e03} alt="" />
          <div className="dicription-cont">
            {/* <div className="promo-tag">
              <img src={Promoimage} alt="" />
            </div> */}
          <p className="clothinh-innerdsecp">Black Poplin Short Sleeve Regular Fit shirt </p>
   
           <IoIosHeartEmpty className="heart-icon" />
           <div className="banner-div1-1">
          <IoBagOutline className="bag-tag"/>
          <p className="banner-divp"><span>Great Choice</span> 5 sold</p>
          </div>
   
          
          </div>
          {/* <p className="block-p">long sleeve Hoodie</p> */}
          <div className="price-cont">
          <p className="price-p">&pound;17.99</p>
          {/* <p className="price-p2">&pound;17.99</p> */}
          </div>

         <div className="rectangle-cont">
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>

         <IoIosSquare className="rectangle-icon3"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line" />
        </div>
        <div className="clothing-innerdsect01">
          <img src={e04} alt="" />
          <div className="dicription-cont">
          <p className="clothinh-innerdsecp">Stone Jersey Tie Waist Cargo Short </p> <IoIosHeartEmpty className="heart-icon" />
          <div className="banner-div1">
          <IoBagOutline className="bag-tag"/>
          <p className="banner-divp"><span>Great Choice</span> 15 sold</p>
          </div>
          
          </div>
          <p className="price-p">&pound;16.99</p>
          <div className="rectangle-cont">
         <IoIosSquareOutline className="rectangle-icon2"/>
         <IoIosSquare className="rectangle-icon3"/>

         <IoIosSquare className="rectangle-icon3"/>
         {/* <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/>
         <IoIosSquare className="rectangle-icon4"/>
         <IoIosSquare className="rectangle-icon5"/> */}
         
         </div>
         <hr className="product-line" />
        </div>
      </div>

      <div className="next-div">
          <button>Load next 48</button>
      </div>
      <Footer/>
    </div>


  )
}

export default Seven