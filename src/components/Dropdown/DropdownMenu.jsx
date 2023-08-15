import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Cambio aquí
import DropdownItem from "./DropdownItem";
import { BiBug, BiTerminal, BiSolidBolt, BiChevronLeft } from "react-icons/bi";
import { CSSTransition } from "react-transition-group";

import "./DropdownMenu.css";

const DropdownMenu = () => {
  const [active, setActive] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const navigate = useNavigate();

  function calcHeight(el) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  const handleLinkClick = (path) => {
    setMenuHeight(null); // Collapse the menu
    navigate(path);
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={active === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<BiTerminal />}>
            <Link to="/home">QA Testing</Link>
          </DropdownItem>
          <DropdownItem
            leftIcon={<BiBug />}
            goToMenu={"introqa"}
            setActive={setActive}
          >
            Introducción al QA
          </DropdownItem>
          <DropdownItem
            leftIcon={<BiBug />}
            goToMenu={"testingmanual"}
            setActive={setActive}
          >
            Testing Manual
          </DropdownItem>
          <DropdownItem
            leftIcon={<BiBug />}
            goToMenu={"testingautomation"}
            setActive={setActive}
          >
            Testing Automation Y Performance
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "testingautomation"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<BiChevronLeft />}
            goToMenu={"main"}
            setActive={setActive}
          >
            <h3>Introducción al QA</h3>
          </DropdownItem>
          <DropdownItem
            leftIcon={<BiBug />}
            goToMenu={"introduccionaldesarrollowebhtml"}
            setActive={setActive}
          >
            Introducción al Desarrollo Web & HTML
          </DropdownItem>
          <DropdownItem leftIcon={<BiSolidBolt />}>
            Evaluación general
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "introduccionaldesarrollowebhtml"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="testingautomation"
            leftIcon={<BiChevronLeft />}
            setActive={setActive}
          >
            <h3>Introducción al Desarrollo Web & HTML</h3>
          </DropdownItem>
          <DropdownItem
            leftIcon={<BiSolidBolt />}
            onClick={() => handleLinkClick("/tedamoslabienvenida")}
          >
            <Link to="/tedamoslabienvenida">¡Te damos la bienvenida!</Link>
          </DropdownItem>
          <DropdownItem leftIcon={<BiSolidBolt />}>
            <Link to="/queeseldesarrolloweb">¿Qué es el desarrollo web?</Link>
          </DropdownItem>
          <DropdownItem leftIcon={<BiSolidBolt />}>
            <Link to="/principiosbasicosdeldesarrolloweb">
              Principios básicos del desarrollo web
            </Link>
          </DropdownItem>
          <DropdownItem leftIcon={<BiSolidBolt />}>
            <Link to="/editoresdecodigo">Editores de código</Link>
          </DropdownItem>
          <DropdownItem leftIcon={<BiSolidBolt />}>
            <Link to="/estructuradelhtml">Estructura del HTML</Link>
          </DropdownItem>
          <DropdownItem leftIcon={<BiSolidBolt />}>
            <Link to="/desafiodeldia">Desafío del día</Link>
          </DropdownItem>
          <DropdownItem leftIcon={<BiSolidBolt />}>
            <Link to="/resoluciondeldesafio">Resolución del desafío</Link>
          </DropdownItem>
          <DropdownItem leftIcon={<BiSolidBolt />}>
            <Link to="/validatusconocimientosmapadeconceptosvistosyencuestafinal">
              Valida tus conocimientos
            </Link>
          </DropdownItem>
          <DropdownItem leftIcon={<BiSolidBolt />}>
            <Link to="/mapadeconceptosvistosyencuestafinal">
              Mapa de conceptos vistos y encuesta final
            </Link>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
