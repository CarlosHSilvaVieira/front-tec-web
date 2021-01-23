import React from "react";
import style from "../autores.module.css";
import { menus } from "../../../utils/constants";
import { PageSideBarContent, PageContent, Title } from "../../../styles/shared";

import Sidebar from "../../../components/sideBar";
import FormAutor from "../../../components/form/autor";
import { TitleContainer, FormContainer } from "./AuthorForm";

const AuthorFormPage = () => {
  return (
    <PageSideBarContent>
      <Sidebar menus={menus} />
      <PageContent>
        <TitleContainer>
          <Title>Cadastro de Autor</Title>
        </TitleContainer>
        <FormAutor
          handleSave={() => {}}
          handleCancel={() => {}}
          cancelText={"Cancelar"}
          saveText={"Salvar"}
          autor={null}
        />
      </PageContent>
    </PageSideBarContent>
  );
};

export default AuthorFormPage;
