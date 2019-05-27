import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'

const MapStateToProps = (state) => {

    return {

    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
