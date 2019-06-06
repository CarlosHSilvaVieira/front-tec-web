import { editoraActions } from "../actions/editoras"

const initialState = {
    editoras: [],
}

export default (state = initialState, action) => {

    switch (action.type) {

        case editoraActions.GET_ALL_EDITORAS:
            return { ...state, editoras: action.payload }

        default:
            return state
    }
}
