import { useTranslation } from "react-i18next";
import "./index.scss";

export const HomePage = () => {
  const { t } = useTranslation("translation", { keyPrefix: "pages.home" });

  return (
    <section className="HomePage">
      <p className="HomePage__intro">{t("intro")}</p>
    </section>
  );
};

export default HomePage;
