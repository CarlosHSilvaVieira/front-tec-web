import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import carrinho from './carrinho'
import produto from './produto'
import userLogged from './userLogged'

const reducers = (history) => combineReducers({
    router: connectRouter(history),
    carrinho,
    produto,
    userLogged,
})

export default reducers
