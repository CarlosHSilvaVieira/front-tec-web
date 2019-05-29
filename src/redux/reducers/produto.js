import { produtosActions } from "../actions/produtos";

const initialState = {
    produtos_home: [],
}

export default (state = initialState, action) => {

    switch (action.type) {
        
        case produtosActions.SEARCH_HOME:
            return { ...state, produtos_home: action.payload }
    
        default:
            return state
    }
}
