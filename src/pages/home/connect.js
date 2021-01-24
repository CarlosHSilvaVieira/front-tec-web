import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { getBooksHomeStart } from '../../store/books/books.actions';

const MapStateToProps = (state) => {

    return {

        produtos: state.book.listBooksHome.rows,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    findProdutos: getBooksHomeStart,
    changePage: () => push('/about-us')
}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
