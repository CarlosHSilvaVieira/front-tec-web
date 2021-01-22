import React from "react";
import { map } from "lodash";
import { Link } from "react-router-dom";
import style from "./sidebar.module.css";

const SideBar = ({ menus }) => {

  const renderMenus = () => {
    return map(menus, (menu, index) => {
      return (
        <div key={index}>
          <h6>{menu.title}</h6>
          <ul className="nav flex-column mb-2">{renderItens(menu)}</ul>
        </div>
      );
    });
  };

  const renderItens = (menu) => {
    return map(menu.itens, (item, index) => {
      return (
        <li key={index} className="nav-item">
          <Link className="nav-link" to={item.href}>
            {item.nome}
          </Link>
        </li>
      );
    });
  };

  return (
    <div
      className={"col-md-2 col-lg-2 bg-light"}
      style={{ marginBottom: "20px" }}
    >
      <div className={style.sidebar}>{renderMenus()}</div>
    </div>
  );
};

export default SideBar;
