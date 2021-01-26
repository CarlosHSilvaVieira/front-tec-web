import React, { useState, useEffect } from "react";
import style from "./loginform.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserStart } from "../../../store/users/users.actions";
import { loginEmployeeStart } from "../../../store/employees/employees.actions";

import Switch from "../../switch";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [stateLogin, setStateLogin] = useState({
    email: "",
    senha: "",
    isEmployee: false,
  });

  const handleSwitch = (value) => {
    setStateLogin({ ...stateLogin, isEmployee: value });
  };

  const handleChangeEmail = (event) => {
    setStateLogin({ ...stateLogin, email: event.target.value });
  };

  const handleChangePass = (event) => {
    setStateLogin({
      ...stateLogin,
      senha: event.target.value,
    });
  };

  const handleLogin = () => {
    if (stateLogin.isEmployee) {
      dispatch(loginEmployeeStart(stateLogin));
    } else {
      dispatch(loginUserStart(stateLogin));
    }
  };

  return (
    <div className={style.box}>
      <h5 className={style.title}>Entrar</h5>
      <div className="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Digite seu email"
          onChange={handleChangeEmail}
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Senha</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Digite sua senha"
          onChange={handleChangePass}
        />
      </div>
      <div className="form-group">
        <Switch
          handleSwitch={handleSwitch}
          children="Sou funcionário da BookStore"
        />
      </div>
      <div className="form-group">
        <span>
          Não possui cadastro ?" "
          <Link to="/cadastrar-agora">Cadastrar agora</Link>
        </span>
      </div>
      <div className="form-group">
        <span>
          Esqueceu seu login ? <Link to="/alterar-senha">Alterar senha</Link>
        </span>
      </div>
      <button type="button" onClick={handleLogin} className="btn btn-primary">
        Entrar
      </button>
    </div>
  );
};

export default LoginForm;
