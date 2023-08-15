import React from "react";
import "./DropdownItem.css";

const DropdownItem = ({ goToMenu, setActive, leftIcon, children }) => {
  const handleClick = (event) => {
    event.preventDefault(); // Evita que se navegue al usar el enlace falso
    if (goToMenu && setActive) {
      setActive(goToMenu);
    }
  };

  return (
    <div
      className="menu-item"
      role="button" // Usa el rol de un botón para mejorar la accesibilidad
      onClick={handleClick}
      tabIndex="0" // Asegura que el elemento sea enfocable
    >
      <span className="icon-button">{leftIcon}</span>
      {children}
    </div>
  );
};

export default DropdownItem;
