import React, { useEffect } from "react";
import style from "./books.module.css";
import { menus } from "../../utils/constants";

import Sidebar from "../../components/sideBar";
import Table from "../../components/table";
import Modal from "../../components/modal";
import FormBook from "../../components/form/book";

import { useDispatch, useSelector } from "react-redux";
import {
  createBookStart,
  editBookStart,
  deleteBookStart,
  getAllBooksStart,
} from "../../store/books/books.actions";

const BooksPage = () => {
  const [title, setTitle] = useState("Cadastrar");
  const [selectedBook, setSelectedBook] = useState(null);
  const [formSaveFunction, setFormSaveFunction] = useState(() => {});
  const [formCancelFunction, setFormCancelFunction] = useState(() => {});

  const dispatch = useDispatch();

  const { books, lastId } = useSelector((state) => ({
    books: state.book.listBooks.rows,
    lastId: state.book.createBook.lastId,
  }));

  useEffect(() => {
    if (lastId) {
      dispatch(getAllBooksStart());
    }
  }, [lastId]);

  useEffect(() => {
    dispatch(getAllBooksStart());
  }, []);

  const createTableHeaders = () => {
    if (books.length) {
      const book = books[0];
      return Object.keys(book);
    }
    return [];
  };

  const onClickCreate = () => {
    setTitle("Cadastrar");
    setSelectedBook(null);
    setFormSaveFunction(onCreate);
  };

  const onClickEdit = (book) => {
    setTitle("Editar");
    setSelectedBook(book);
    setFormSaveFunction(onEdit);
  };

  const onCreate = (book) => {
    dispatch(createBookStart(book));
  };

  const onEdit = (book) => {
    dispatch(editBookStart(book));
    document.getElementById("closeModal").click();
  };

  const onRemove = (book) => {
    dispatch(deleteBookStart(book));
  };

  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <div className="row" style={{ minHeight: "100vh" }}>
        <Sidebar menus={menus} />
        <div className="col">
          <div className="row">
            <div className={style.title}>
              <h2>Gerenciamento de books</h2>
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
                Cadastrar Produto
              </button>
            </div>
          </div>
          <Modal id="exampleModalCenter" title={title}>
            <FormBook
              handleSave={formSaveFunction}
              handleCancel={formCancelFunction}
              cancelText="Cancelar"
              saveText="Salvar"
              book={selectedBook}
            />
          </Modal>
          <div className="row">
            <Table
              headers={createTableHeaders()}
              data={books}
              onVisualize={() => {}}
              onEdit={onClickEdit}
              onRemove={onRemove}
              modal_id="#exampleModalCenter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
