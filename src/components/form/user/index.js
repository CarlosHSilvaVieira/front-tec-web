import React, { useState } from "react";
import style from "./user.module.css";
import { createUserStart } from "../../../store/users/users.actions";
import { useDispatch } from "react-redux";

const FormUser = () => {
  const dispatch = useDispatch();

  const [stateUser, setStateUser] = useState({
    email: "",
    password: "",
    address: "",
    cpf: "",
    name: "",
  });

  const handleChange = (event) => {
    switch (event.target.id) {
      case "name":
        setStateUser({ ...stateUser, name: event.target.value });
        break;

      case "email":
        setStateUser({ ...stateUser, email: event.target.value });
        break;

      case "password":
        setStateUser({ ...stateUser, password: event.target.value });
        break;

      case "address":
        setStateUser({ ...stateUser, address: event.target.value });
        break;

      case "cpf":
        setStateUser({ ...stateUser, cpf: event.target.value });
        break;

      default:
        break;
    }
  };

  const handleSubmit = () => {
    dispatch(createUserStart(stateUser));
  };

  return (
    <div className={style.box}>
      <h5 className={style.title}>Cadastrar</h5>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label for="inputPassword4">Senha</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label for="inputAddress">Nome</label>
        <input
          type="text"
          className="form-control"
          id="inputNome"
          placeholder="Nome"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label for="inputAddress">Endereço</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Endereço"
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputCPF">CPF</label>
          <input
            type="text"
            className="form-control"
            id="cpf"
            placeholder="CPF"
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-block btn-primary"
        onClick={handleSubmit}
      >
        Cadastrar
      </button>
    </div>
  );
};

export default FormUser;
