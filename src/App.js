import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/NavIteam/NavItem";
import DropdownMenu from "./components/Dropdown/DropdownMenu";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routeConfig from "./routeConfig"; // Importa el archivo de configuración

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          <NavItem icon={<AiOutlineCaretDown />}>
            <DropdownMenu />
          </NavItem>
        </Navbar>
        <Routes>
          {routeConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
