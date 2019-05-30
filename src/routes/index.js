import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/home'
import LoginPage from '../pages/login'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={LoginPage} />
        </Switch>
        <Footer />
    </div>
)

export default routes
