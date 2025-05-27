import { useTranslation } from "react-i18next";
import "./index.scss";

export const HomePage = () => {
  const { t } = useTranslation("translation", { keyPrefix: "pages.HomePage" });

  return (
    <section className="HomePage">
      <div className="HomePage__intro">
        <p>{t("intro")}</p>
      </div>
    </section>
  );
};

export default HomePage;
