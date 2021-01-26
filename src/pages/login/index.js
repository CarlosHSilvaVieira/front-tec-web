import React, { useEffect } from "react";
import LoginForm from "../../components/form/login";
import style from "./login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../store/store";
import * as url from "../../utils/url";

const LoginPage = () => {
  const { userLogged, employee } = useSelector((state) => ({
    userLogged: state.user.user.data,
    employee: state.employee.employee.data,
  }));

  const redirectToLogged = () => {
    if (userLogged) {
      history.push(url.USER_BASE);
    } else if (employee) {
      history.push(url.EMPLOYEER_BASE);
    }
  };

  useEffect(() => {
    redirectToLogged();
  }, [userLogged, employee]);

  useEffect(() => {
    redirectToLogged();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={style.hero}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
