import React from "react";
import "./Menu.css";

interface MenuProps {
  isActive: boolean;
}

const Menu: React.FC<MenuProps> = ({ isActive }) => {
  return (
    <div className={`menu-body ${isActive ? "active" : ""} `}>
      {isActive && (
        <div className="menu-container">
          <div>ANALOG TIMER</div>
          <div>DIGITAL TIMER</div>
          <div>TEXT TIMER</div>
        </div>
      )}
    </div>
  );
};

export default Menu;
