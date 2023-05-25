import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import "./Contact.css";

import mail from "../../assets/images/send.png";
import location from "../../assets/images/map.png";
import phone from "../../assets/images/phone.png";

function Contact() {
  const form = useRef();

  const handleFormError = () => {
    const element = document.querySelector(".contact-submit");
    const tl = gsap.timeline();

    tl.to(element, {
      backgroundColor: "red",
      x: -14,
      duration: 0.1,
    })
      .to(element, {
        x: 14,
        duration: 0.1,
      })
      .to(element, {
        backgroundColor: "#3178c6",
        x: 0,
        duration: 0.1,
      });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Sprawdzanie pól formularza
    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const userSubject = form.current.user_subject.value;
    const message = form.current.message.value;

    if (!userName || !userEmail || !userSubject || !message) {
      handleFormError();
      return;
    }

    emailjs
      .sendForm(
        "service_6o9ffdu",
        "template_dqfu1ih",
        form.current,
        "3AvruBjXSAg5tOswL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 3000);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="contact-intro-container">
        <p className="contact-intro">CONTACT FORM</p>
        <p className="contact-description">Don't be shy! Hit me up!</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          className="contact-input"
          placeholder="Name*"
        />

        <input
          type="email"
          name="user_email"
          className="contact-input"
          placeholder="Email*"
        />

        <input
          type="subject"
          name="user_subject"
          className="contact-input"
          placeholder="Subject*"
        />

        <textarea
          name="message"
          className="contact-input message-input"
          placeholder="Message*"
        />
        <input
          type="submit"
          value={clicked ? "MESSAGE SENT 📩" : "SEND"}
          className={clicked ? "contact-submit-clicked" : "contact-submit"}
        />
      </form>
      <div className="contact-info" id="contact">
        <div className="contact-location-container contact-container">
          <img
            className="contact-location-image contact-image"
            src={location}
          ></img>
          <p className="contact-location-text contact-text">Poznań, Poland</p>
        </div>
        <div className="contact-mail-container contact-container">
          <img className="contact-mail-image contact-image" src={mail}></img>
          <p className="contact-mail-text contact-text">
            contact@ljaskolka.com
          </p>
        </div>
        <div className="contact-phone-container contact-container">
          <img className="contact-phone-image contact-image" src={phone}></img>
          <p className="contact-mail-text contact-text">+48 600 439 234</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
