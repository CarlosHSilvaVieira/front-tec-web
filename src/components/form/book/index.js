import React, { useState, useEffect } from "react";
import { map } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { getAllAuthorsStart } from "../../../store/authors/authors.actions";
import { getAllPushingsStart } from "../../../store/pushing/pushing.actions";

const FormBook = ({ book, handleCancel, handleSave, cancelText, saveText }) => {
  const dispatch = useDispatch();

  const { employee, listPushings, listAuthors } = useSelector(
    ({ employee, pushing, author }) => ({
      employee: employee.employee.data,
      listPushings: pushing.listPushings.rows,
      listAuthors: author.listAuthors.rows,
    })
  );

  const [stateBook, setStateBook] = useState({
    name: "",
    description: "",
    stock: 0,
    price: 0,
    release: new Date().getFullYear().toString(),
    language: "",
    category: "",
    idauthor: 0,
    idpushing: 0,
  });

  useEffect(() => {
    if (book) {
      setStateBook(book);
    }
  }, [book]);

  useEffect(() => {
    dispatch(getAllAuthorsStart());
    dispatch(getAllPushingsStart());
  }, []);

  const makeAutoresOptions = () => {
    if (listAuthors.length) {
      return map(listAuthors, (author, index) => {
        return (
          <option key={index} value={author.id}>
            {author.name}
          </option>
        );
      });
    }

    return <option value={0}>Sem Opções</option>;
  };

  const makeEditorasOptions = () => {
    if (listPushings.length) {
      return map(listPushings, (pushing, index) => {
        return (
          <option key={index} value={pushing.id}>
            {pushing.name}
          </option>
        );
      });
    }

    return <option value={0}>Sem Opções</option>;
  };

  const cleanState = () => {
    setStateBook({
      name: "",
      description: "",
      stock: 0,
      price: 0,
      release: new Date().getFullYear().toString(),
      language: "",
      category: "",
      idauthor: 0,
      idpushing: 0,
    });
  };

  const onCancel = () => {
    cleanState();
    handleCancel?.();
  };

  const validadeBook = (book) => {
    if (book.idpushing === 0 || book.idauthor === 0) {
      return false;
    } else if (
      book.name === "" ||
      book.description === "" ||
      book.language === "" ||
      book.category === "" ||
      book.release === ""
    ) {
      return false;
    }

    return true;
  };

  const onSave = () => {
    const {
      id,
      name,
      idpushing,
      idauthor,
      stock,
      price,
      description,
      category,
      release,
      language,
    } = stateBook;

    let book = {
      id: id ? id : null,
      name,
      idpushing,
      idauthor,
      stock,
      price,
      description,
      category,
      release,
      language,
    };

    if (validadeBook(book)) {
      handleSave?.(book);
    }
  };

  const onChange = (event) => {
    switch (event.target.id) {
      case "name":
        setStateBook({ ...stateBook, name: event.target.value });
        break;

      case "description":
        setStateBook({ ...stateBook, description: event.target.value });
        break;

      case "stock":
        setStateBook({ ...stateBook, stock: event.target.value });
        break;

      case "price":
        setStateBook({ ...stateBook, price: event.target.value });
        break;

      case "release":
        setStateBook({ ...stateBook, release: event.target.value });
        break;

      case "language":
        setStateBook({ ...stateBook, language: event.target.value });
        break;

      case "category":
        setStateBook({ ...stateBook, category: event.target.value });
        break;

      default:
        break;
    }
  };

  const onSelect = (event) => {
    switch (event.target.id) {
      case "author":
        setStateBook({ ...stateBook, idauthor: event.target.value });
        break;

      case "pushing":
        setStateBook({ ...stateBook, idpushing: event.target.value });
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className={"form-row"}>
        <div className={"form-group col-md-6"}>
          <label>Nome do Produto</label>
          <input
            type={"text"}
            id={"name"}
            placeholder={"Nome"}
            className={"form-control"}
            onChange={onChange}
            value={stateBook?.name}
          ></input>
        </div>
        <div className={"form-group col-md-6"}>
          <label>Descrição</label>
          <input
            type={"text"}
            id={"description"}
            placeholder={"Descrição"}
            className={"form-control"}
            onChange={onChange}
            value={stateBook?.description}
          ></input>
        </div>
      </div>

      <div className={"form-row"}>
        <div className={"form-group col-md-6"}>
          <label>Estoque</label>
          <input
            type={"number"}
            id={"stock"}
            min={"0"}
            max={"200"}
            placeholder={"Estoque"}
            className={"form-control"}
            onChange={onChange}
            value={stateBook?.stock}
          ></input>
        </div>
        <div className={"form-group col-md-6"}>
          <label>Valor</label>
          <input
            type={"text"}
            id={"price"}
            placeholder={"Valor"}
            className={"form-control"}
            onChange={onChange}
            value={stateBook?.price}
          ></input>
        </div>
      </div>

      <div className={"form-row"}>
        <div className={"form-group col-md-6"}>
          <label>Data de lançamento</label>
          <input
            type={"date"}
            id={"release"}
            placeholder={"Data de lançamento"}
            className={"form-control"}
            onChange={onChange}
            value={stateBook?.release}
          ></input>
        </div>
        <div className={"form-group col-md-6"}>
          <label>Idioma</label>
          <input
            type={"text"}
            id={"language"}
            placeholder={"Idioma"}
            className={"form-control"}
            onChange={onChange}
            value={stateBook?.language}
          ></input>
        </div>
      </div>

      <div className={"form-group"}>
        <label>Categoria</label>
        <input
          type={"text"}
          id={"category"}
          placeholder={"Categoria"}
          className={"form-control"}
          onChange={onChange}
          value={stateBook?.category}
        ></input>
      </div>

      <div className={"form-row"}>
        <div className={"form-group col-md-6"}>
          <label>Autor</label>
          <select className={"form-control"} id={"author"} onChange={onSelect}>
            <option value={0}>Selecione</option>
            {makeAutoresOptions()}
          </select>
        </div>
        <div className={"form-group col-md-6"}>
          <label>Editora</label>
          <select className={"form-control"} id={"pushing"} onChange={onSelect}>
            <option value={0}>Selecione</option>
            {makeEditorasOptions()}
          </select>
        </div>
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

export default FormBook;
