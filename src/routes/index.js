import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/home'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
    </div>
)

export default routes
