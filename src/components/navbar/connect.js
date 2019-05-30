import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const MapStateToProps = (state) => {

    return {
        userLogged: state.userLogged.user,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
