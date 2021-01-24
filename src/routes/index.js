import React from "react";
import { Route, Switch } from "react-router-dom";
import { PageContainer } from "../styles/shared";

import * as url from "../utils/url";

import Home from "../pages/home";
import LoginPage from "../pages/login";
import RegisterUserPage from "../pages/registerUser";
import AreaFuncionario from "../pages/employeerArea";
import ProdutosPage from "../pages/books";
import AutoresPage from "../pages/authors";
import EditorasPage from "../pages/pushings";
import AreaLogada from "../pages/userArea";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Routes = () => (
  <>
    <NavBar />
    <PageContainer>
      <Switch>
        <Route exact path={url.BASE} component={Home} />
        <Route exact path={url.LOGIN} component={LoginPage} />
        <Route exact path={url.USER_BASE} component={AreaLogada} />
        <Route exact path={url.USER_REGISTER} component={RegisterUserPage} />
        <Route exact path={url.EMPLOYEER_BASE} component={AreaFuncionario} />
        <Route exact path={url.EMPLOYEER_BOOK} component={ProdutosPage} />
        <Route exact path={url.EMPLOYEER_AUTHOR} component={AutoresPage} />
        <Route exact path={url.EMPLOYEER_PUSHING} component={EditorasPage} />
      </Switch>
      <Footer />
    </PageContainer>
  </>
);

export default Routes;
