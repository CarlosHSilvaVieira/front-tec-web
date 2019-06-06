import axios from 'axios'

const URL = 'http://localhost:3005/api/editora'

export const editoraActions = {

    GET_ALL_EDITORAS: 'GET_ALL_EDITORAS',
}

export const getAllEditoras = () => {

    return async dispatch => {

        const result = await axios.get(`${URL}/all`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => response.data)

        if (result.editoras.length) {

            dispatch({
                type: editoraActions.GET_ALL_EDITORAS,
                payload: result.editoras
            })
        }
    }
}
