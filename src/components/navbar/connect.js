import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../redux/actions/userLogged'

const MapStateToProps = (state) => {

    return {
        userLogged: state.userLogged.user,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    logout: logout,

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
