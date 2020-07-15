import history from '../history'
import {
    CREATE_REQUEST
} from './type'

export const createRequest = (formValues) => ({
    type: CREATE_REQUEST,
    payload: formValues
  });