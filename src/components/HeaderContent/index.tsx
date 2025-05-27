import { useTranslation } from "react-i18next";
import { useScrolled } from "../../context/ScrolledContext";
import Avatar from "../Avatar";
import LangButton from "../LangButton";
import MenuButton from "../MenuButton";
import ScrollArrow from "../ScrollArrow";
import "./index.scss";

export const HeaderContent = () => {
  const scrolled = useScrolled();
  const { t } = useTranslation("translation", { keyPrefix: "HeaderContent" });

  return (
    <header className={`HeaderContent scrolled--${scrolled}`}>
      {!scrolled && <LangButton />}

      <Avatar />
      <h1 className="HeaderContent__title">{t("title")}</h1>
      <p className="HeaderContent__subtitle">{t("subtitle")}</p>

      {!scrolled && <ScrollArrow />}
      {scrolled && <MenuButton />}
    </header>
  );
};

export default HeaderContent;
