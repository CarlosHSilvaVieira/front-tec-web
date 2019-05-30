import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const MapStateToProps = (state) => {

    return {

    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
