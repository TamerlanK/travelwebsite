import "./contact.css";
import instagram from "../../assets/contact/instagram.png";
import messenger from "../../assets/contact/messenger.png";
import figma from "../../assets/contact/figma.png";
import be from "../../assets/contact/be.png";

const ContactTitle = () => {
  return (
    <div className="contact-title section-padding" id="contact">
      <h1>Get in touch with us</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <>
      <ContactTitle />
      <section className="contact">
        <form>
          <h1>Send us a message</h1>
          <div className="contact-row-1">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="contact-row-2">
            <input type="email" placeholder="Your gmail" />
          </div>
          <div className="contact-row-3">
            <textarea placeholder="Your message"></textarea>
          </div>
          <button>Send</button>
        </form>
        <div className="contact-info">
          <h2>Contact info</h2>
          <p>Phone: +234 706338**</p>
          <p>
            Email:{" "}
            <a href="mailto:stephenolushola5@gmail.com">
              {" "}
              stephenolushola5@gmail.com
            </a>
          </p>
          <p>Socials</p>
          <div className="contact-socials">
            <a href="#">
              <img src={instagram} />
            </a>
            <a href="#">
              <img src={messenger} />
            </a>
            <a href="#">
              <img src={figma} />
            </a>
            <a href="#">
              <img src={be} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
