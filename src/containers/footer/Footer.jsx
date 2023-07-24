import "./footer.css";
import logo from "../../assets/footer/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-top-text">Subscribe to stay</div>
        <form>
          <input type="email" placeholder="Enter your email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">&copy; 2022 All Rights Reserved</div>
        <ul className="footer-nav">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Sales and Refunds</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
