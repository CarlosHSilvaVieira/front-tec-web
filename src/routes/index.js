import React from "react";
import { Route, Switch } from "react-router-dom";
import { PageContainer } from "../styles/shared";

import * as url from "../utils/url";

import Home from "../pages/home";
import LoginPage from "../pages/login";
import RegisterUserPage from "../pages/registerUser";
import EmployeeArea from "../pages/employeeArea";
import BooksPage from "../pages/books";
import AuthorsPage from "../pages/authors";
import PublishingsPage from "../pages/pushings";
import UserArea from "../pages/userArea";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Routes = () => (
  <>
    <NavBar />
    <PageContainer>
      <Switch>
        <Route exact path={url.BASE} component={Home} />
        <Route exact path={url.LOGIN} component={LoginPage} />
        <Route exact path={url.USER_BASE} component={UserArea} />
        <Route exact path={url.USER_REGISTER} component={RegisterUserPage} />
        <Route exact path={url.EMPLOYEER_BASE} component={EmployeeArea} />
        <Route exact path={url.EMPLOYEER_BOOK} component={BooksPage} />
        <Route exact path={url.EMPLOYEER_AUTHOR} component={AuthorsPage} />
        <Route exact path={url.EMPLOYEER_PUSHING} component={PublishingsPage} />
      </Switch>
      <Footer />
    </PageContainer>
  </>
);

export default Routes;
