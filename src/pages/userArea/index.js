import React, { useEffect } from "react";
import Sidebar from "../../components/sideBar";
import { menus_usuarios } from "../../utils/constants";
import style from "./area.module.css";
import { useSelector } from "react-redux";
import { history } from "../../store/store";
import * as url from "../../utils/url";

const UserArea = () => {
  const { userLogged } = useSelector((state) => ({
    userLogged: state.user.user.data,
  }));

  useEffect(() => {
    if (!userLogged) {
      history.push(url.BASE);
    }
  }, [userLogged]);

  return (
    <div className="container-fluid">
      <div className={style.row}>
        <Sidebar menus={menus_usuarios} />
        <div className="col-md-9">
          <div className={style.jumbotron}>
            <div className="jumbotron">
              <h1 className="display-4">Olá, {userLogged?.name}</h1>
              <p className="lead">
                Essa é a parte do sistema reservada para você.
              </p>
              <hr className="my-4" />
              <p>Nela você pode fazer o controle sobre suas compras.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserArea;
