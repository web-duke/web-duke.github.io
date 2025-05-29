import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import LangButton from "../LangButton";
import "./index.scss";

export const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      ref={containerRef}
      className={`MenuButton isLeft--${isLeft} isOpen--${isOpen}`}
    >
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
        <Link
          className="MenuButton__itemsWrapper__item"
          to={ROUTES.HOME}
          onClick={closeMenu}
        >
          <span className="material-symbols-sharp">home</span>
        </Link>

        <Link
          className="MenuButton__itemsWrapper__item"
          to={ROUTES.ABOUT}
          onClick={closeMenu}
        >
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
