import "../../styles/aboutSection.css";
import useTranslationStore from "../../store/store";

const AboutSection = () => {
  const { t } = useTranslationStore();

  return (
    <div className="aboutSection">
      <p>
        {t("about_section_one")}
        <span className="highlight">Marco</span>
        {t("about_section_two")}
        <a href="https://decidio.com"> Decidio</a> {t("about_section_three")}
        <a href="https://truendo.com"> Truendo </a>
        {t("about_section_four")}
      </p>
    </div>
  );
};

export default AboutSection;
