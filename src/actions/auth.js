import {AUTH} from '../constants/actionType'
import * as api from '../api/index'

export const signin = (FormData, history) => async (dispatch) => {
    try {
        const {data} = await api.signIn(FormData);
        dispatch({
            type : AUTH,
            data
        })
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}
export const signup = (FormData, history) => async (dispatch) => {

    try {
        const {data} = await api.signUp(FormData);
        console.log(data);
        dispatch({
            type : AUTH,
            data
        })
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}