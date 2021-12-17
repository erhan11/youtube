import Phone from "../../img/phone.jpeg";
import Email from "../../img/phone.jpeg";
import Address from "../../img/address.png";
import "./contact.css"

function Contact() {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="wrapper">
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
            <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
           <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
