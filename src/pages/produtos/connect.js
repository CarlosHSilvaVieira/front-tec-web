import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router';
import { getAllProdutos } from '../../redux/actions/produtos'

const MapStateToProps = (state) => {

    return {
        employee: state.userLogged.employee,
        produtos: state.produto.produtos,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    redirect: (route) => push(route),
    getAllProdutos: getAllProdutos,

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
