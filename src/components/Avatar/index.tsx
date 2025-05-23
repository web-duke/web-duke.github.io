import { useTranslation } from "react-i18next";
import { useScrolled } from "../../context/ScrolledContext";
import avatar from "./../../assets/avatar.jpeg";
import "./index.scss";

export const Avatar = () => {
  const { scrolled } = useScrolled();
  const { t } = useTranslation("translation", { keyPrefix: "Avatar" });

  return (
    <img
      className={`Avatar scrolled--${scrolled}`}
      src={avatar}
      alt={t("alt")}
    />
  );
};

export default Avatar;
