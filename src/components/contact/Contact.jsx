import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ddd = "11";
const whatsapp = "987419874";
const whatsappParte1 = "98741";
const whatsappParte2 = "9874";
const email = "rafaelberger.dev@gmail.com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7mems34",
        "template_qpmy5gl",
        form.current,
        "UAKtPPyVdn2DnV-yP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>{email}</h5>
            <a href={`mailto:${email}`} target="_blank">
              Send an e-mail
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>{`+55 (${ddd}) ${whatsappParte1}-${whatsappParte2}`}</h5>
            <a href={`https://wa.me/55${ddd}${whatsapp}`} target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* End of Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
