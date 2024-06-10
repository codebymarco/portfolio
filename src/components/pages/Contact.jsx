import { SiGmail, SiOnlyfans } from "react-icons/si";
import "../../styles/contact.css";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  // https://github.com/codebymarco
  // https://www.linkedin.com/in/miguelmarco-ramcharan-34b04a277

  const handleDivClick = (path) => {
    window.open(path, "_blank");
  };

  const handleClick2 = () => {
    const email = "miguelmarcoramcharan@gmail.com";
    const subject = "Subject Here"; // You can customize the subject if needed
    const body = "Body of the email goes here"; // You can customize the body if needed
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );
  };

  return (
    <div className="contact">
      <div className="contact-top">
        <h1>Contact me</h1>
      </div>
      <div className="contact-container">
        <div onClick={handleClick2} className="box">
          <div>
            <SiGmail color="red" />
            <span>miguelmarcoramcharan@gmail.com</span>
          </div>
          <span>01</span>
        </div>
        <div className="box">
          <div>
            <IoPhonePortraitOutline color="green" />
            <span>061 149 8474</span>
          </div>
          <span>02</span>
        </div>
        <div
          onClick={() => handleDivClick(`https://github.com/codebymarco`)}
          className="box"
        >
          <div>
            <FaGithub color="white" />

            <p>github</p>
          </div>
          <span>03</span>
        </div>

        <div
          onClick={() =>
            handleDivClick(
              `https://www.linkedin.com/in/miguelmarco-ramcharan-34b04a277`
            )
          }
          className="box"
        >
          <div>
            <CiLinkedin color="dodgerblue" />

            <p>linkden</p>
          </div>
          <span>04</span>
        </div>

        <div className="box">
          <div>
            <SiOnlyfans color="skyblue" />

            <p>onlyfans</p>
          </div>
          <span>05</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
