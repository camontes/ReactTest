import {
    CREATE_REQUEST
} from '../actions/type'

const initialState = {
    data: {}
}

export default  (state = initialState, action) => {

    switch(action.type){
        case CREATE_REQUEST:
            return {
                ...state,
                data:action.payload
                }
        default:
            return state;
    }
};
