import { useTranslation } from "react-i18next";
import "./index.scss";

export const AboutPage = () => {
  const { t } = useTranslation("translation", { keyPrefix: "pages.AboutPage" });

  return (
    <>
      <h1>{t("title")}</h1>

      <p>{t("txt1")}</p>

      <p>{t("txt2")}</p>

      <p>
        {t("txt3")}
        <a
          href="https://github.com/web-duke/web-duke.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <p>
        {t("txt4")}
        <a
          href="https://codepen.io/webduke/pens/popular"
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
          href="https://www.linkedin.com/in/giovanni-mrqs/"
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
