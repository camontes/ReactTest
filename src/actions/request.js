import history from '../history'
import {
    CREATE_REQUEST,
    UNMOUNT_REQUEST
} from './type'

export const createRequest = (formValues) => ({
    type: CREATE_REQUEST,
    payload: formValues
});

export const unmountRequest = () => ({
    type: UNMOUNT_REQUEST
});