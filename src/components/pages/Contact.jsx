import "../../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-top">
        <h1>Contact me</h1>
      </div>
      <div className="contact-container">
        <div className="box">
          <div className="label">email</div>
          <div className="value">miguelmarcoramcharan@gmail.com</div>
        </div>
        <div className="box">
          <div className="label">cell</div>
          <div className="value">061 149 8474</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
