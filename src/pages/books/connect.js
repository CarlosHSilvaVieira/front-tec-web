import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router';
import { getAllBooksStart, createBookStart, editBookStart, deleteBookStart } from '../../store/books/books.actions'

const MapStateToProps = (state) => {

    return {
        employee: state.userLogged.employee,
        produtos: state.produto.produtos,
        last_id: state.produto.last_id,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    redirect: (route) => push(route),
    getAllProdutos: getAllBooksStart,
    create: createBookStart,
    edit: editBookStart,
    remove: deleteBookStart,

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
