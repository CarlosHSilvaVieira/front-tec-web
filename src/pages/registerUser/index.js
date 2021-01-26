import React from "react";
import FormUser from "../../components/form/user";
import style from "./register.module.css";
import { useSelector } from "react-redux";
import { history } from "../../store/store";
import * as url from "../../utils/url";

const RegisterUserPage = () => {
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

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={style.page}>
          <div className={style.container_box}>
            <div className={style.box}>
              <FormUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUserPage;
