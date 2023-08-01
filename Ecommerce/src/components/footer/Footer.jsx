import "./footer.css";
import { FaMobile, FaVoicemail } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-footer">
          <div className="location">
            <a href="https://goo.gl/maps/pmWpXbzZbffUn4Lw5">
              <RiHome3Line
                size={20}
                style={{ color: "#FFF", marginRight: "2rem" }}
              />
            </a>
            <div>
              <p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9916345589163!2d-79.67730482341672!3d43.62753305408999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b409fb8a947f9%3A0x418640e93fdafd13!2sLambton%20College!5e0!3m2!1sen!2sca!4v1690773516883!5m2!1sen!2sca"
                  width="300"
                  height="200"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </p>
              <a href="https://goo.gl/maps/hzLcgSyScKuesEaB9">
                <p>121 Brunal Road</p>
                <p>Mississauga, Canada</p>
              </a>
            </div>
          </div>
          <div className="mobile">
            <FaMobile
              size={20}
              style={{ color: "#FFF", marginRight: "2rem" }}
            />
            <div>
              <h4>
                <a href="tel:+1416-505-9345">+1 416-505-9345</a>
              </h4>
            </div>
          </div>
          <div className="email">
            <FaVoicemail
              size={20}
              style={{ color: "#FFF", marginRight: "2rem" }}
            />
            <div>
              <p>
                <a href="mailto:jinish5597@gmail.com">jinish5597@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="right-footer">
          <h4>Thank you for choosing</h4>
          <p>
            Thank you for choosing JPECOMMERCE for your online shopping needs.
            We strive to provide you with an exceptional shopping experience and
            top-quality products. Your satisfaction is our priority, and we are
            committed to delivering the best service possible. JPECOMMERCE -
            Your one-stop destination for all things fashionable, functional,
            and fabulous. Happy shopping!
          </p>
          <p className="social">
            <a href="https://www.facebook.com/jinish5597/">
              <FiFacebook size={20} style={{ margin: "1rem" }} />
            </a>
            <a href="https://www.instagram.com/jinish_patel/">
              <SiInstagram size={20} style={{ margin: "1rem" }} />
            </a>
            <a href="https://github.com/jinishpatel">
              <FiGithub size={20} style={{ margin: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/jinishpateljp/">
              <SlSocialLinkedin size={20} style={{ margin: "1rem" }} />
            </a>
          </p>
        </div>
      </div>
      <div className="copyright">Copyright @ GroupProject lambton Guys.</div>
    </div>
  );
}

export default Footer;
