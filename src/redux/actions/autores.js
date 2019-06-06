import axios from 'axios'

const URL = 'http://localhost:3005/api/autor'

export const autoresActions = {

    GET_ALL_AUTORES: 'GET_ALL_AUTORES',
}

export const getAllAutores = () => {

    return async dispatch => {

        const result = await axios.get(`${URL}/all`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => response.data)

        if (result.autores.length) {

            dispatch({
                type: autoresActions.GET_ALL_AUTORES,
                payload: result.autores
            })
        }
    }
}
