import React from 'react';
import "../../styles/footer.css";
import resumePDF from "../../../public/resume.pdf"// Adjust the path based on your actual file location

const Footer = () => {
  const handleDownloadResume = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = resumePDF;
    downloadLink.download = 'resume.pdf';
    downloadLink.click();
  };

  return (
    <footer>
      <a href="https://github.com/codebymarco" target="_blank" rel="noopener noreferrer">github</a>
      <span onClick={handleDownloadResume}>resume</span>
      <a href="mailto:miguelmarcoramcharan@gmail.com">miguelmarcoramcharan@gmail.com</a>
      <a href="https://www.linkedin.com/in/miguelmarco-ramcharan-34b04a277" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
