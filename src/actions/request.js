import history from '../history'
import {
    CREATE_REQUEST,
    UNMOUNT_REQUEST
} from './type'

export const unmountRequest = () => ({
    type: UNMOUNT_REQUEST
});

export const createRequest = (formValues) => dispatch => {
    dispatch({type: CREATE_REQUEST, payload: formValues})
    history.push("/showRequest");  
}