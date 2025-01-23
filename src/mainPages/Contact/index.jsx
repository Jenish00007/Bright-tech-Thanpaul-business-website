import "./contact.css";
import {toast} from 'react-toastify'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
export default function Contact() {
  return (
    <section className="contactPage">
      <div className="heading">
        <small>Get in touch...</small>
        <h1> Contact Us</h1>
      </div>
      <div className="messageUsSection">
        <div className="textContent">
          <h3>Message Us</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            voluptates eos rerum quod nobis eaque consectetur incidunt deserunt
            odio animi.
          </p>
          <p className="location">
            <p>
              <span>
                <LocationOnIcon />
              </span>
              10-L, Duraisamy Naidu St, Dharmapuri Bazaar, Dharmapuri - 636701
            </p>
            <p>
              {" "}
              <span>
                <EmailTwoToneIcon />
              </span>{" "}
              @gmail.com
            </p>
            <p>
              <span>
                <LocalPhoneRoundedIcon />
              </span>
              +91 9442252929
            </p>
          </p>
        </div>
        <div className="contactForm">
          <form
            action="https://formsubmit.co/jaianushka1056@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="http://shringaar.netlify.app/contact"
            />
            <div className="name">
              <input type="text" name="first_name" placeholder="First Name" required/>

              <input type="text" name="last_name" placeholder="Last Name" required/>
            </div>

            <input
              type="email"
              name="email"
              id="contactEmail"
              placeholder="email Id"
              required
            />

            <textarea
              id="story"
              name="story"
              rows="5"
              cols="15"
              placeholder="I recently had the pleasure of discovering Dhanapal Jewellers jwellery..."
            ></textarea>

            <button
              type="submit"
              onClick={() => {
                toast.success("Thank you for messaging us, Have a great Day ", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  className: "loginToast",
                });
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.690347015381!2d78.16195952482666!3d12.13332658811027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac1710b63ce999%3A0x10b6fbe35bdaf865!2sDn%20dhanapal%20jewellers!5e0!3m2!1sen!2sin!4v1737627843807!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
