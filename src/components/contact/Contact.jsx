import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export default function Contact() {
  const form = useRef();

  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s08ujfs",
        "template_6ou6k9w",
        form.current,
        "zIgjL_wHqh6mLvfV2"
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
    setMessage(true);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            // try to match the name field with the template id field if using emailjs
            name="user_name"
            placeholder="name"
            required
          />
          <input
            type="text"
            // try to match the name field with the template id field if using emailjs
            name="user_email"
            placeholder="Email"
            required
          />
          <textarea
            cols="30"
            rows="10"
            // try to match the name field with the template id field if using emailjs
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

// service_s08ujfs
//template_6ou6k9w
