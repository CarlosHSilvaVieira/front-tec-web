import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes'

const App = (props) => {
  return (
    <ConnectedRouter history={props.history}>
      <Routes />
    </ConnectedRouter>
  )
}

export default App;
