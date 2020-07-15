import {combineReducers} from 'redux'
import userReducer from '../reducers/userReducer'
import MedicalAppointmentReducer from '../reducers/MedicalAppointmentReducer'
import requestReducer from '../reducers/requestReducer'
import {reducer as formReducer} from 'redux-form'

export default combineReducers ({
    form: formReducer,
    users: userReducer,
    request: requestReducer,
    MedicalAppointments: MedicalAppointmentReducer
});