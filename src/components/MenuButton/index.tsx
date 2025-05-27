import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import LangButton from "../LangButton";
import "./index.scss";

export const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeft, setIsLeft] = useState(false);

  return (
    <div className={`MenuButton isLeft--${isLeft} isOpen--${isOpen}`}>
      <button
        className="MenuButton__openButton"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <span className="material-symbols-sharp">close</span>
        ) : (
          <span className="material-symbols-sharp">menu</span>
        )}
      </button>

      <menu className="MenuButton__itemsWrapper">
        <Link className="MenuButton__itemsWrapper__item" to={ROUTES.HOME}>
          <span className="material-symbols-sharp">home</span>
        </Link>

        <Link className="MenuButton__itemsWrapper__item" to={ROUTES.ABOUT}>
          <span className="material-symbols-sharp">info</span>
        </Link>

        <LangButton className="MenuButton__itemsWrapper__item" />

        <button
          className="MenuButton__itemsWrapper__item"
          onClick={() => setIsLeft((prev) => !prev)}
        >
          <span className="material-symbols-sharp">swap_horiz</span>
        </button>
      </menu>
    </div>
  );
};

export default MenuButton;
