import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/home'
import LoginPage from '../pages/login'
import RegisterUserPage from '../pages/registerUser'
import AreaFuncionario from '../pages/areaFuncionario'
import ProdutosPage from '../pages/produtos'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/cadastrar-agora' component={RegisterUserPage} />
            <Route exact path='/area-do-funcionario' component={AreaFuncionario} />
            <Route exact path='/produtos' component={ProdutosPage} />
        </Switch>
        <Footer />
    </div>
)

export default routes
