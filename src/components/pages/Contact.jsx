import "../../styles/contact.css";

const Contact = () => {

  // https://github.com/codebymarco
  //

  return (
    <div className="contact">
      <div className="contact-top">
        <h1>Contact me</h1>
      </div>
      <div className="contact-container">
        <div className="box">
          <div>
            <span>miguelmarcoramcharan@gmail.com</span>
          </div>
          <span>01</span>
        </div>
        <div className="box">
          <div>
            <span>061 149 8474</span>
          </div>
          <span>02</span>
        </div>
        <div className="box">
          <div>
            <p>github</p>
          </div>
          <span>03</span>
        </div>


        <div className="box">
          <div>
            <p>linkden</p>
          </div>
          <span>04</span>
        </div>

        <div className="box">
          <div>
            <p>onlyfans</p>
          </div>
          <span>05</span>
        </div>

      </div>
    </div>
  );
};

export default Contact;
