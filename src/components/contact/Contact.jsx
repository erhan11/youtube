import Phone from "../../img/phone.jpeg";
import Email from "../../img/phone.jpeg";
import Address from "../../img/address.png";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ntrzo6l",
        "template_5oglupq",
        formRef.current,
        "user_hYWSlP6ia5W9Gby3XOPxu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discus your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img className="c-icon" src={Phone} alt="" />
              00905338401234
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              erhan@verigo.com
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              North Cyprus
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Whats your story?</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            ></textarea>
            <button>Submit</button>
            {done && "Mesajınız için teşekkür ederiz."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
