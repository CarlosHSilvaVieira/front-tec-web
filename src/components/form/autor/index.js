import React, { useState } from "react";
import { useSelector } from "react-redux";

import connect from "./connect";

const FormAutor = ({ autor, onCancel, onSave }) => {
  const [formValues, setFormValues] = useState({
    id: null,
    nome: "",
    target_autor: null,
  });

  const employee = useSelector((state) => state.userLogged.employee);

  useEffect(() => {
    setFormValues({
      id: autor.id,
      nome: autor.nome,
      target_autor: autor,
    });
  }, [autor]);

  const cleanState = () => {
    setFormValues({
      id: null,
      nome: "",
      target_autor: null,
    });
  };

  const handleCancel = () => {
    cleanState();
    onCancel?.();
  };

  const validadeAutor = (autor) => {
    if (autor.nome === "") {
      return false;
    }
    return true;
  };

  const handleSave = () => {
    const { id, nome } = formValues;
    if (validadeAutor({ nome })) {
      const saveValue = id ? { id, ...nome } : { nome };
      onSave(saveValue);
    }
  };

  const handleChange = (event) => {
    switch (event.target.id) {
      case "nome":
        setFormValues({ ...formValues, nome: event.target.value });
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className={"form-group"}>
        <label>Nome do autor</label>
        <input
          type={"text"}
          id={"nome"}
          placeholder={"Nome"}
          className={"form-control"}
          onChange={(e) => handleChange(e)}
          value={formValues?.nome}
        ></input>
      </div>

      <div className={"form-row"}>
        <div className={"form-group col-md-6"}>
          <button
            type="button"
            data-dismiss="modal"
            onClick={(e) => handleCancel(e)}
            className={"btn btn-block btn-danger"}
          >
            {cancelText}
          </button>
        </div>
        <div className={"form-group col-md-6"}>
          <button
            type="button"
            onClick={() => handleSave()}
            className={"btn btn-block btn-primary"}
          >
            {saveText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormAutor;
