import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/home'
import NavBar from '../components/navbar'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    </div>
)

export default routes
