import { useTranslation } from "react-i18next";
import "./index.scss";
import { CONTACT_DATA } from "../../constants/contactData";

export const AboutPage = () => {
  const { t } = useTranslation("translation", { keyPrefix: "pages.AboutPage" });

  return (
    <>
      <h1>{t("title")}</h1>

      <p>{t("txt1")}</p>

      <p>{t("txt2")}</p>

      <p>
        {t("txt3")}
        <a href={CONTACT_DATA.Github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>

      <p>
        {t("txt4")}
        <a
          href={CONTACT_DATA.Codepen}
          target="_blank"
          rel="noopener noreferrer"
        >
          Codepen
        </a>
        .
      </p>

      <p>
        {t("txt5")}
        <a
          href={CONTACT_DATA.Linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {t("txt6")}
        <br />
        {t("txt7")}
      </p>
    </>
  );
};

export default AboutPage;
