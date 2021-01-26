import React, { useState, useEffect } from "react";
import style from "./editoras.module.css";
import { menus } from "../../utils/constants";

import Sidebar from "../../components/sideBar";
import Table from "../../components/table";
import Modal from "../../components/modal";
import FormPushing from "../../components/form/pushing";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllPushingsStart,
  createPushingStart,
  editPushingStart,
  deletePushingStart,
} from "../../store/pushing/pushing.actions";

const PublishingPage = () => {
  const [title, setTitle] = useState("Cadastrar");
  const [selectedPublishing, setSelectedPublishing] = useState(null);
  const [formSaveFunction, setFormSaveFunction] = useState(() => {});
  const [formCancelFunction, setFormCancelFunction] = useState(() => {});

  const dispatch = useDispatch();

  const { employee, listPushings, lastId } = useSelector((state) => ({
    employee: state.employee.employee.data,
    listPushings: state.pushing.listPushings.rows,
    lastId: state.pushing.createPushing.lastId,
  }));

  useEffect(() => {
    dispatch(getAllPushingsStart());
  }, []);

  useEffect(() => {
    if (lastId) {
      dispatch(getAllPushingsStart());
    }
  }, [lastId]);

  const createTableHeaders = () => {
    if (listPushings.length) {
      const publishing = listPushings[0];
      return Object.keys(publishing);
    }
    return [];
  };

  const onClickCreate = () => {
    setTitle("Cadastrar");
    setFormSaveFunction(onCreate);
    setSelectedPublishing(null);
  };

  const onClickEdit = (publishing) => {
    setTitle("Editar");
    setFormSaveFunction(onEdit);
    setSelectedPublishing(publishing);
  };

  const onCreate = (publishing) => {
    dispatch(createPushingStart(publishing));
  };

  const onEdit = (publishing) => {
    dispatch(editPushingStart(publishing));
    document.getElementById("closeModal").click();
  };

  const onRemove = (publishing) => {
    dispatch(deletePushingStart(publishing));
  };

  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <div className="row" style={{ minHeight: "100vh" }}>
        <Sidebar menus={menus} />
        <div className="col">
          <div className="row">
            <div className={style.title}>
              <h2>Gerenciamento de Editoras</h2>
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
                Cadastrar Autor
              </button>
            </div>
          </div>
          <Modal id="exampleModalCenter" title={title}>
            <FormPushing
              handleSave={formSaveFunction}
              handleCancel={formCancelFunction}
              cancelText="Cancelar"
              saveText="Salvar"
              pushing={selectedPublishing}
            />
          </Modal>
          <div className="row">
            <Table
              headers={createTableHeaders()}
              data={listPushings}
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

export default PublishingPage;
