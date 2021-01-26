import React, { useEffect } from "react";
import Sidebar from "../../components/sideBar";
import { menus } from "../../utils/constants";
import style from "./area.module.css";
import { useSelector } from "react-redux";
import { history } from "../../store/store";
import * as url from "../../utils/url";

const EmplyoeeArea = () => {
  const { employee } = useSelector((state) => ({
    employee: state.employee.employee.data,
  }));

  useEffect(() => {
    if (!employee) {
      history.push(url.BASE);
    }
  }, [employee]);

  return (
    <div className="container-fluid">
      <div className={style.row}>
        <Sidebar menus={menus} />
        <div className="col-md-9">
          <div className={style.jumbotron}>
            <div className="jumbotron">
              <h1 className="display-4">Olá, {employee?.name}</h1>
              <p className="lead">
                Essa é a parte do sistema reservada para os funcionários.
              </p>
              <hr className="my-4" />
              <p>
                Nela você pode fazer o controle sobre os produtos e as vendas da
                loja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmplyoeeArea;
