import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/home'
import LoginPage from '../pages/login'
import RegisterUserPage from '../pages/registerUser'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/cadastrar-agora' component={RegisterUserPage} />
        </Switch>
        <Footer />
    </div>
)

export default routes
