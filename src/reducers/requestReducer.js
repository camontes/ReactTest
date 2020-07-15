import {
    CREATE_REQUEST,
    UNMOUNT_REQUEST
} from '../actions/type'

const initialState = {
    data: {}
}

export default (state = initialState, action) => {

    switch (action.type) {
        case CREATE_REQUEST:
            return {
                ...state,
                data: action.payload
            }
        case UNMOUNT_REQUEST:
            return {
                ...state,
                data: {}
            }
        default:
            return state;
    }
};
