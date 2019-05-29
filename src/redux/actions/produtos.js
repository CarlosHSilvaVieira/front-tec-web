import axios from 'axios'

const URL = 'http://localhost:3005/api/produto'

export const produtosActions = {

    SEARCH_HOME: 'SEARCH_HOME',
}

export const searchHomeProdutos = () => {

    return async dispatch => {

        const result = await axios.get(`${URL}/limit/10`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => response.data)

        if (result.produtos.length) {

            dispatch({
                type: produtosActions.SEARCH_HOME,
                payload: result.produtos
            })
        }
    }
}
