import RequestReducer from '../../reducers/requestReducer'
import { CREATE_REQUEST } from '../../actions/type'

describe('request', () => {
    it('return initial state', () => {
        expect(RequestReducer(undefined, {})).toEqual({ data: {} });
    });

});