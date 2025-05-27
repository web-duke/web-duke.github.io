import { useTranslation } from "react-i18next";
import "./index.scss";

export const AboutPage = () => {
  const { t } = useTranslation("translation", { keyPrefix: "pages.AboutPage" });

  return (
    <div>
      {t("intro")}
      <a
        href="https://www.linkedin.com/in/giovanni-mrqs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/web-duke/web-duke.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  );
};

export default AboutPage;
