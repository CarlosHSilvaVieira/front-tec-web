import { userLoggedActions } from "../actions/userLogged"

const initialState = {
    user: null,
}

export default (state = initialState, action) => {

    switch (action.type) {

        case userLoggedActions.LOGIN:
            return { ...state, user: action.payload }

        case userLoggedActions.LOGOUT:
            return { ...state, user: action.payload }

        default:
            return state
    }
}
