import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import book from './books/books.reducer'
import author from './authors/authors.reducer'
import pushing from './pushing/pushing.reducer'
import user from './users/users.reducer'
import employee  from './employees/employees.reducer'

const reducers = (history) => combineReducers({
    router: connectRouter(history),
    book,
    user,
    author,
    pushing,
    employee
})

export default reducers
