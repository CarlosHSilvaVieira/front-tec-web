import React, { useState, useEffect } from "react";

const FormPushing = ({
  pushing,
  handleCancel,
  handleSave,
  cancelText,
  saveText,
}) => {
  const [statePushing, setStatePushing] = useState({
    name: "",
    description: "",
    address: "",
  });

  useEffect(() => {
    if (pushing) {
      setStatePushing(pushing);
    }
  }, [pushing]);

  const cleanState = () => {
    setStatePushing({
      name: "",
      description: "",
      address: "",
    });
  };

  const onCancel = () => {
    cleanState();
    handleCancel?.();
  };

  const onSave = () => {
    handleSave(statePushing);
  };

  const handleChange = (event) => {
    switch (event.target.id) {
      case "name":
        setStatePushing({ ...statePushing, name: event.target.value });
        break;

      case "description":
        setStatePushing({ ...statePushing, description: event.target.value });
        break;

      case "address":
        setStatePushing({ ...statePushing, address: event.target.value });
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className={"form-group"}>
        <label>Nome</label>
        <input
          type={"text"}
          id={"name"}
          placeholder={"Nome"}
          className={"form-control"}
          onChange={handleChange}
          value={statePushing?.name}
        />
      </div>
      <div className={"form-group"}>
        <label>Descrição</label>
        <input
          type={"text"}
          id={"description"}
          placeholder={"Descrição"}
          className={"form-control"}
          onChange={handleChange}
          value={statePushing?.description}
        />
      </div>
      <div className={"form-control"}>
        <label>Endereço</label>
        <input
          type={"text"}
          id={"address"}
          placeholder={"Endereço"}
          className={"form-control"}
          onChange={handleChange}
          value={statePushing?.address}
        />
      </div>

      <div className={"form-row"}>
        <div className={"form-group col-md-6"}>
          <button
            type="button"
            data-dismiss="modal"
            onClick={onCancel}
            className={"btn btn-block btn-danger"}
          >
            {cancelText}
          </button>
        </div>
        <div className={"form-group col-md-6"}>
          <button
            type="button"
            onClick={onSave}
            className={"btn btn-block btn-primary"}
          >
            {saveText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPushing;
