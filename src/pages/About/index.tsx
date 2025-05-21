import { useTranslation } from "react-i18next";
import "./index.scss";

export const About = () => {
  const { t } = useTranslation();

  return <h1>{t("pages.about")}</h1>;
};

export default About;
