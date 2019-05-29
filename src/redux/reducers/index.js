import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import carrinho from './carrinho'
import produto from './produto'

const reducers = (history) => combineReducers({
    router: connectRouter(history),
    carrinho,
    produto,
})

export default reducers
