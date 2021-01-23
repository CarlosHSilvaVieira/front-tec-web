import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";

import { Form, FormContainer, FormRow } from "./style";

const FormAutor = ({ autor, onCancel, onSave, saveText, cancelText }) => {

  const initialValues = {
    name: "",
    gender: "",
    nationality: "",
    email: "",
    biography: "",
    birthdate: new Date()
  };


  const { register, handleSubmit, setValue, control, errors } = useForm({
    defaultValues: initialValues
  });

  const [formValues, setFormValues] = useState({
    id: null,
    nome: "",
    target_autor: null,
  });

  const employee = useSelector((state) => state.userLogged.employee);

  useEffect(() => {
    if (autor) {
      setFormValues({
        id: autor?.id,
        nome: autor?.nome,
        target_autor: autor,
      });
    }
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
      case "name":
        setFormValues({ ...formValues, nome: event.target.value });
        break;

      default:
        break;
    }
  };

  const onSubmit = (data) => console.log(data);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Controller
            as={TextField}
            control={control}
            id="name"
            name="name"
            label="Nome"
            variant="outlined"
            className="col-md-6"
            ref={register({ required: true })}
          />
          <FormControl variant="outlined" className="col-md-5">
            <InputLabel id="select-gender">Genero</InputLabel>
            <Select
              labelId="select-gender"
              id="gender"
              name="gender"
              ref={register}
              label="Genero"
              onChange={(e) => setValue("gender", e.target.value)}
            >
              <MenuItem value="m">Masculino</MenuItem>
              <MenuItem value="f">Feminino</MenuItem>
              <MenuItem value="n">Não informar</MenuItem>
            </Select>
          </FormControl>
        </FormRow>
        <FormRow>
          <Controller
            as={TextField}
            control={control}
            id="nationality"
            name="nationality"
            label="Nacionalidade"
            variant="outlined"
            className="col-md-6"
            ref={register}
          />
          <Controller
            as={TextField}
            control={control}
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            className="col-md-6"
            ref={register}
          />
          <Controller
            as={TextField}
            control={control}
            type="date"
            id="birthdate"
            name="birthdate"
            variant="outlined"
            className="col-md-5"
            ref={register({ valueAsDate: true })}
          />
        </FormRow>
        <FormRow>
          <Controller
            as={TextField}
            control={control}
            id="biography"
            name="biography"
            multiline
            rows={4}
            label="Biografia"
            variant="outlined"
            ref={register}
          />
        </FormRow>
        <FormRow>
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
            <button type="submit" className={"btn btn-block btn-primary"}>
              {saveText}
            </button>
          </div>
        </FormRow>
      </Form>
    </FormContainer>
  );
};

export default FormAutor;
