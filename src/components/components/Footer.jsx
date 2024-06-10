import "../../styles/footer.css";

const Footer = () => {
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
    <footer>
      <a href="https://github.com/codebymarco" target="_blank">github</a>
      <span onClick={handleClick2}>miguelmarcormacharan@gmail.com</span>
      <a href="https://www.linkedin.com/in/miguelmarco-ramcharan-34b04a277" target="_blank">
        linkden
      </a>
    </footer>
  );
};

export default Footer;
