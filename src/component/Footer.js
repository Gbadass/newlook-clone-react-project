import { IconName, FaFacebookSquare, FaInstagram, FaPinterestSquare, FaTwitter } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";



function Footer() {
  return (
    <div>
      <div className="footer01">
        <div className="footer-cont1">
          <p className="footer-p1">Sign up to our newsletter</p>
          <p className="footer-p2">Sign up to our e-mails to be the first to hear about the latest trends, new arrivals and exclusive offers. <br />
            You can unsubscribe at any time.</p>

          <div className="footer-div01">
            <input type="text" placeholder="Email address" />
            <button>Sign me up</button>
          </div>

        </div>
        <hr className="footer-line" />

        <div className="footer-dsection">
          <div className="footer-innerd1">
            <p className="footer-innerd1-p01">Help & Info</p>
            <p className="footer-innerd1-p1"> Delivery & Collection</p>
            <p className="footer-innerd1-p1">Returns & refund</p>
            <p className="footer-innerd1-p1"> Track your funds</p>
            <p className="footer-innerd1-p1">Size guide</p>
            <p className="footer-innerd1-p1"> Accessibility</p>
            <p className="footer-innerd1-p1">Help Centre</p>
          </div>

          <div className="footer-innerd1">
            <p>Payment & Discount</p>
            <p className="footer-innerd1-p1"> Payment & Discount</p>
            <p className="footer-innerd1-p1">Ways to pay</p>
            <p className="footer-innerd1-p1"> Gift cards</p>
            <p className="footer-innerd1-p1">Student Discount</p>
            <p className="footer-innerd1-p1"> Promotions & Discount</p>
          </div>
          <div className="footer-innerd1">
            <p>About New Look</p>
            <p className="footer-innerd1-p1"> Find a Store</p>
            <p className="footer-innerd1-p1">About us</p>
            <p className="footer-innerd1-p1"> Careers</p>
            <p className="footer-innerd1-p1">Sustainability</p>
            <p className="footer-innerd1-p1"> Modern slavery statement</p>

          </div>
          <div className="footer-innerd2">
            <p className="footer-innerd1-bigp">Be Social</p>
            <p className="footer-innerd1-p001">Join the conversation</p>
            <div className="icon-container">
              <FaFacebookSquare className="facebook-icons" />
              <FaInstagram className="facebook-icons" />
              <FaPinterestSquare className="facebook-icons" />
              <FaTwitter className="facebook-icons" />
              <SiYoutube className="facebook-icons" />

            </div>
          </div>

        </div>
      </div>

      <div className="footer02">
        <div className="footer02-div1">
          🇬🇧
          <p className="unitedk">United Kingdom - &pound; - English</p>
        </div>
        <div className="svg-container">
        <div className="svg-div" >
          <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9684 18.7742C18.9152 18.7742 23.4582 14.6452 23.4582 9.58715C23.4582 4.01296 18.9152 0.193604 13.9684 0.193604H9.72836C4.68064 0.193604 0.541504 4.01296 0.541504 9.58715C0.541504 14.6452 4.68064 18.7742 9.72836 18.7742H13.9684Z" fill="#0079BE" />
            <path d="M9.72894 0.916016C5.186 0.916016 1.45068 4.73537 1.45068 9.48376C1.45068 14.2321 5.186 17.9483 9.72894 17.9483C14.2719 17.9483 18.0072 14.1289 18.0072 9.48376C18.1082 4.73537 14.3728 0.916016 9.72894 0.916016ZM4.47932 9.48376C4.47932 7.21279 5.89268 5.2515 7.81081 4.42569V14.4386C5.89268 13.716 4.47932 11.7547 4.47932 9.48376ZM11.6471 14.4386V4.42569C13.6662 5.2515 14.9786 7.10956 14.9786 9.48376C14.9786 11.7547 13.6662 13.716 11.6471 14.4386Z" fill="white" />
            <path d="M13.9684 18.7742C18.9152 18.7742 23.4582 14.6452 23.4582 9.58715C23.4582 4.01296 18.9152 0.193604 13.9684 0.193604H9.72836C4.68064 0.193604 0.541504 4.01296 0.541504 9.58715C0.541504 14.6452 4.68064 18.7742 9.72836 18.7742H13.9684Z" fill="#004A98" />
            <path d="M9.72894 0.916016C5.186 0.916016 1.45068 4.73537 1.45068 9.48376C1.45068 14.2321 5.186 17.9483 9.72894 17.9483C14.2719 17.9483 18.0072 14.1289 18.0072 9.48376C18.1082 4.73537 14.3728 0.916016 9.72894 0.916016ZM4.47932 9.48376C4.47932 7.21279 5.89268 5.2515 7.81081 4.42569V14.4386C5.89268 13.716 4.47932 11.7547 4.47932 9.48376ZM11.6471 14.4386V4.42569C13.6662 5.2515 14.9786 7.10956 14.9786 9.48376C14.9786 11.7547 13.6662 13.716 11.6471 14.4386Z" fill="white" />
          </svg>
        </div>

        <div className="svg-div">

          <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7679 5.69921L20.5241 3.71728H23.8752V0.12915H0.958496V22.8388H23.8752V19.2497H20.6866L19.497 17.9098L18.3075 19.2497H9.33558V12.0724H6.36371L10.0929 3.77096H13.7137L14.5783 5.64554V3.77096H19.0637L19.7679 5.69921ZM17.2814 7.03805V6.23496L17.6054 7.03805L19.1179 11.0009H20.5241L22.0377 7.03805L22.3075 6.23496V10.9472H23.8752V4.89509H21.2814L20.0929 7.9485L19.7679 8.80528L19.4429 7.9485L18.2543 4.89509H15.6595V10.9472H17.2814V7.03805ZM13.9304 10.9472H15.7137L13.0127 4.89509H10.9033L8.20121 10.9472H9.98454L10.47 9.76838H13.4439L13.9304 10.9472ZM11.6606 6.98438L11.9835 6.23496L12.3085 6.98438L12.9575 8.53792H11.0658L11.6606 6.98438ZM10.5793 12.0724V18.1255H15.6595V16.8393H12.0929V15.7679H15.5522V14.4837H12.0929V13.4112H15.6595V12.1261H10.5793V12.0724ZM21.3887 18.0708H23.3887L20.5241 15.0711L23.3887 12.0724H21.3887L19.5512 14.0543L17.7127 12.0724H15.6595L18.5241 15.1258L15.6595 18.1255H17.6054L19.4429 16.1436L21.3887 18.0708ZM22.145 15.0711L23.8752 16.8393V13.3575L22.145 15.0711Z" fill="#006FCF" />
          </svg>
        </div>

        <div className="svg-div">
          <svg width="40" height="13" viewBox="0 0 40 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1045 0.438928L9.86974 12.3256H6.47176L3.89842 2.83806C3.89842 2.39906 3.53168 1.95907 3.16495 1.78367C2.15488 1.34566 1.05157 0.99387 0.0415039 0.817478L0.133705 0.438928H5.55286C6.28632 0.438928 6.92966 0.99387 7.02186 1.69548L8.3997 8.54901L11.7065 0.438928H15.1045ZM28.3297 8.46081C28.3297 5.29764 23.8294 5.12224 23.8294 3.80426C23.8294 3.36526 24.2873 2.92527 25.2062 2.83806C26.3075 2.75086 27.4108 2.92527 28.3297 3.36526L28.8798 0.817478C27.9619 0.465684 26.8596 0.290283 25.8496 0.290283C22.7261 0.290283 20.4304 1.87187 20.4304 4.24325C20.4304 5.91303 21.9916 6.87923 23.2783 7.49462C24.5629 8.10803 24.9307 8.46081 24.9307 8.98801C24.9307 9.77781 23.9206 10.1296 23.0027 10.1296C21.8994 10.1296 20.706 9.866 19.6959 9.42601L19.1448 12.062C20.246 12.502 21.5327 12.6774 22.7261 12.6774C26.1251 12.502 28.3297 10.9204 28.3297 8.46081ZM36.6868 12.3256H39.6248L37.0536 0.438928H34.2989C33.6556 0.438928 33.1956 0.817478 32.9211 1.34566L28.1453 12.3256H31.5432L32.1866 10.5686H36.3191L36.6868 12.3256ZM33.1045 8.10803L34.7589 3.62885L35.7679 8.10803H33.1045ZM19.6959 0.438928L17.0324 12.3256H13.8178L16.4813 0.438928H19.6959Z" fill="#1A2070" />
          </svg>
        </div> 

        <div className="svg-div">
        <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.853 16.7879H20.0209V2.18042H11.853V16.7879Z" fill="#7673C0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3721 9.48567C12.369 6.63457 13.6843 3.94038 15.9384 2.18038C11.8835 -0.989686 6.01539 -0.289815 2.82979 3.74425C-0.356849 7.77832 0.347489 13.6178 4.40029 16.7879C7.78609 19.4366 12.5526 19.4366 15.9384 16.7879C13.6843 15.0289 12.37 12.3357 12.3721 9.48567Z" fill="#EB001B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.0398 9.48573C31.0388 14.6161 26.8584 18.774 21.7019 18.773C19.6106 18.773 17.5806 18.0731 15.9375 16.7879C19.9913 13.6179 20.6946 7.77837 17.509 3.74431C17.0495 3.16212 16.5225 2.63773 15.9375 2.18044C19.9913 -0.989626 25.8595 -0.291819 29.0461 3.74225C30.3386 5.37837 31.0419 7.40057 31.0419 9.48263L31.0398 9.48573Z" fill="#00A1DF"/>
</svg>
        </div>

        <div className="svg-div">
        <svg width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.144 16.7869H19.3124V2.18042H11.144V16.7869Z" fill="#FF5F00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6635 9.48471C11.6604 6.63362 12.9758 3.94046 15.23 2.18046C11.1749 -0.989608 5.30648 -0.289737 2.12173 3.74329C-1.06509 7.77839 -0.361753 13.6179 3.69232 16.7869C7.07729 19.4347 11.844 19.4347 15.23 16.7869C12.9769 15.0279 11.6615 12.3358 11.6635 9.48471Z" fill="#EB001B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3332 9.4847C30.3332 14.6161 26.1547 18.774 20.9989 18.774C18.9055 18.774 16.8732 18.0741 15.229 16.7869C19.2831 13.6179 19.9854 7.77837 16.8006 3.74328C16.3411 3.16212 15.8141 2.63773 15.229 2.18044C19.282 -0.989626 25.1505 -0.291819 28.3373 3.74225C29.6299 5.37837 30.3332 7.39954 30.3332 9.48263V9.4847Z" fill="#F79E1B"/>
</svg>
        </div>

        <div className="svg-div">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66074 19.0103L4.96793 16.9303H4.25115H0.87207L3.22719 1.74621C3.22719 1.74621 3.22719 1.64221 3.32958 1.64221H3.43198H9.16618C11.1117 1.64221 12.3405 2.05821 13.0572 2.78622C13.3644 3.20222 13.5692 3.51422 13.6716 3.93023C13.774 4.34623 13.774 4.86623 13.6716 5.59423V6.01024L13.9788 6.21824C14.286 6.32224 14.4908 6.53024 14.5932 6.73824C14.9004 7.05024 15.0028 7.46625 15.1052 7.98625C15.2076 8.50625 15.1052 9.02626 15.0028 9.75426C14.9004 10.4823 14.5932 11.2103 14.286 11.7303C13.9788 12.2503 13.5692 12.6663 13.1596 12.9783C12.7501 13.2903 12.2381 13.4983 11.6237 13.7063C11.1117 13.8103 10.3949 13.9143 9.78056 13.9143H9.47337C9.16618 13.9143 8.85899 14.0183 8.5518 14.2263C8.34701 14.4343 8.14221 14.7463 8.14221 15.0583V15.2663L7.52784 18.9063V19.0103V19.1143C7.52784 19.1143 7.52784 19.1143 7.42544 19.1143H4.66074V19.0103Z" fill="#253B80"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2851 5.69836C14.2851 5.80236 14.2851 5.90637 14.1827 6.01037C13.4659 9.96239 10.9061 11.3144 7.62946 11.3144H5.88877C5.47919 11.3144 5.17201 11.6264 5.06962 12.0424L4.25047 17.5544L4.04568 19.1144C3.94328 19.4264 4.14807 19.6344 4.45525 19.6344H7.42468C7.73186 19.6344 8.03904 19.4264 8.14143 19.0104V18.9064L8.6534 15.2664V15.0584C8.85819 14.7464 9.06298 14.4344 9.47255 14.4344H9.88213C12.7492 14.4344 15.0018 13.2904 15.7186 9.75439C16.0258 8.29838 15.821 7.15437 15.1042 6.21837C14.8994 6.01037 14.5922 5.80236 14.2851 5.69836Z" fill="#179BD7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4656 5.38646C13.3632 5.38646 13.2608 5.28246 13.1584 5.28246C13.056 5.28246 12.9536 5.17846 12.7488 5.17846C12.3393 5.07446 11.8273 5.07446 11.3153 5.07446H6.80976C6.70736 5.07446 6.60496 5.07446 6.50256 5.17846C6.29777 5.28246 6.09297 5.49046 6.09297 5.69847L5.17139 11.8345V12.0425C5.17139 11.6265 5.47858 11.3145 5.88817 11.3145H7.52654C10.8033 11.3145 13.3632 9.96249 14.1824 6.01047C14.1824 5.90647 14.1824 5.80247 14.2848 5.69847C14.08 5.59447 13.8752 5.49047 13.6704 5.38646C13.6704 5.38646 13.568 5.38646 13.4656 5.38646Z" fill="#222D65"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.09396 5.69833C6.09396 5.49033 6.29875 5.28233 6.50355 5.17833C6.60594 5.07433 6.70834 5.07433 6.81074 5.07433H11.3162C11.8282 5.07433 12.3402 5.07433 12.7498 5.17833C12.8522 5.17833 12.9546 5.17833 13.1594 5.28233C13.2618 5.28233 13.3642 5.38633 13.4665 5.38633C13.5689 5.38633 13.5689 5.38633 13.6713 5.49033C13.8761 5.59433 14.0809 5.69833 14.2857 5.80233C14.4905 4.34633 14.2857 3.30632 13.4665 2.47432C12.6474 1.33031 11.1114 0.914307 9.16587 0.914307H3.43163C3.02205 0.914307 2.71485 1.22631 2.61246 1.64231L0.257324 17.0344C0.257324 17.3464 0.462118 17.6584 0.76931 17.6584H4.35321L5.27478 11.9384L6.09396 5.69833Z" fill="#253B80"/>
</svg>
        </div>

        <div className="svg-div">
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
        </div>
        <p className="footer-newp">The celebrities named or featured on NewLook.com have not endorsed, recommended or approved the items offered on site unless they are promoting their own brand.</p>

<div>
  <p className="footer-lastp">&copy; 2023 New Look Retailers Limited <div className="hr1"></div> Terms & Condition <div className="hr1"></div> Privacy <div className="hr1"></div> Security <div className="hr1"></div> Cookies <div className="hr1"></div> Site Map </p>
</div>
      </div>
    </div>
  )
}

export default Footer