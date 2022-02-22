import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { LinkedIn, GitHub, ArrowForward } from "@material-ui/icons";
import cv from "../../files/Rodney_Ovbiye_Resume.pdf";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ezmi31d",
        "template_w9nhn8f",
        formRef.current,
        "user_C8HuMOzt7HoPyuftSe5yq"
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
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <LinkedIn className="c-icon" />
              <a
                href="https://www.linkedin.com/in/rodney-ovbiye-218100166"
                target="_blank"
                rel="noreferrer"
              >
                Rodney Ovbiye
              </a>
            </div>
            <div className="c-info-item">
              <GitHub className="c-icon" />
              <a
                href="https://github.com/Rodney-glitch?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Rodney-glitch
              </a>
            </div>
          </div>
          <a className="cv" href={cv} download>
            <ArrowForward className="af" />
            Download CV
          </a>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>For more infomation...</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea rows={5} placeholder="Message" name="message" />
            <button>Submit</button>
            {done && <span style={{ color: "#59b256" }}>Thank you!:)</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
