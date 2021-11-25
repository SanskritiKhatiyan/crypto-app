// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faYoutube,
//     faFacebook,
//     faTwitter,
//     faInstagram,
//     faWhatsapp,
//     faGithub,
//     faLinkedinIn
//   } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <label className="logo-footer">Crypto </label>
        <ul class="social-media-icons">
          <li className="icons">
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </li>
          <li className="icons">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li className="icons">
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </li>

          <li className="icons">
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li className="icons">
            <a href="#">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>Copyright @2021 GBU.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
