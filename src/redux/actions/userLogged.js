import axios from "axios"

const URL = 'http://localhost:3005/api/usuario'

export const userLoggedActions = {

    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
}

export const login = (email, senha) => {

    return async dispatch => {

        const login = {
            email,
            senha
        }

        const result = await axios.post(`${URL}/login`, JSON.stringify({ login }), {
            headers: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json',
            }
        })
            .then((response) => response.data.resultado)

        if (result) {

            dispatch({
                type: userLoggedActions.LOGIN,
                payload: result
            })
        }
    }
}

export const logout = () => {

    return dispatch => {
        dispatch({
            type: userLoggedActions.LOGOUT,
            payload: null,
        })
    }
}
