import { produtosActions } from "../actions/produtos";

const initialState = {
    produtos_home: [],
    produtos: [],
}

export default (state = initialState, action) => {

    switch (action.type) {

        case produtosActions.SEARCH_HOME:
            return { ...state, produtos_home: action.payload }

        case produtosActions.ALL_PRODUTOS:
            return { ...state, produtos: action.payload }

        default:
            return state
    }
}
