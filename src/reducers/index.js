import {combineReducers} from 'redux'
import requestReducer from '../reducers/requestReducer'
import {reducer as formReducer} from 'redux-form'

export default combineReducers ({
    form: formReducer,
    request: requestReducer,
});