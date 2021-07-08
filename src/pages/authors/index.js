import React, { useState, useEffect } from "react";
import style from "./authors.module.css";
import { menus } from "../../utils/constants";

import Sidebar from "../../components/sideBar";
import Table from "../../components/table";
import Modal from "../../components/modal";
import Formauthor from "../../components/form/author";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAuthorsStart,
  createAuthorStart,
  editAuthorStart,
  deleteAuthorStart,
} from "../../store/authors/authors.actions";

const AuthorsPage = ({}) => {
  const [title, setTitle] = useState("Cadastrar");
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [formSaveFunction, setFormSaveFunction] = useState(() => {});
  const [formCancelFunction, setFormCancelFunction] = useState(() => {});

  const dispatch = useDispatch();

  const { employee, authors, lastId } = useSelector((state) => ({
    employee: state.employee.employee.data,
    authors: state.author.listAuthors.rows,
    lastId: state.author.createAuthor.lastId,
  }));

  useEffect(() => {
    dispatch(getAllAuthorsStart());
  }, []);

  useEffect(() => {
    if (lastId) {
      dispatch(getAllAuthorsStart());
    }
  }, [lastId]);

  const createTableHeaders = () => {
    if (authors.length) {
      const author = authors[0];
      return Object.keys(author);
    }
    return [];
  };

  const onCreateAuthor = (author) => {
    dispatch(createAuthorStart(author));
  };

  const onEditAuthor = (author) => {
    dispatch(editAuthorStart(author));
    document.getElementById("closeModal").click();
  };

  const onRemoveAuthor = (author) => {
    dispatch(deleteAuthorStart(author?.id));
  };

  const onClickCreate = () => {
    setTitle("Cadastrar");
    setSelectedAuthor(null);
    setFormSaveFunction(onCreateAuthor);
  };

  const onClickEdit = (author) => {
    setTitle("Editar");
    setSelectedAuthor(author);
    setFormSaveFunction(onEditAuthor);
  };

  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <div className="row" style={{ minHeight: "100vh" }}>
        <Sidebar menus={menus} />
        <div className="col">
          <div className="row">
            <div className={style.title}>
              <h2>Gerenciamento de authors</h2>
            </div>
          </div>
          <div className="row">
            <div className={style.btn_container}>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={onClickCreate}
              >
                Cadastrar author
              </button>
            </div>
          </div>
          <Modal id="exampleModalCenter" title={title}>
            <Formauthor
              handleSave={formSaveFunction}
              handleCancel={formCancelFunction}
              cancelText="Cancelar"
              saveText="Salvar"
              author={selectedAuthor}
            />
          </Modal>
          <div className="row">
            <Table
              headers={createTableHeaders()}
              data={authors}
              onVisualize={() => {}}
              onEdit={onClickEdit}
              onRemove={onRemoveAuthor}
              modal_id="#exampleModalCenter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorsPage;
