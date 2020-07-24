import React from "react";
import "../stylesheets/component-stylesheets/Footer.scss";
import logo from "../assets/Logo.png";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

// const Footer = () => {
//   return (
//     <div className="footer-container">
//       <div className="footer-box">
//         <div className="logo-column">
//           <img src={logo} alt="logo" width="50px" height="50px" />
//           <h1>Alfheim</h1>
//         </div>
//         <div className="meet-me-column"></div>
//         <div className="stuff-i-did"></div>
//       </div>
//     </div>
//   );
// };

const TemporaryFooter = () => {
  return (
    <div>
      <div className="footer-container1">
        <div className="level">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
            <h3>Alfheim</h3>
          </div>
          <div className="contact-container">
            <FaInstagram size="30" />
            <FaTwitter size="30" />
            <FiMail size="30" />
          </div>
        </div>
      </div>
      {/* <div className="footer-container2">
        <div className="contact-container"></div>
      </div> */}
    </div>
  );
};

export default TemporaryFooter;
