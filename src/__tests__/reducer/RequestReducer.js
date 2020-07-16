import RequestReducer from '../../reducers/requestReducer'

describe('request', () => {
    it('return initial state', () => {
        expect(RequestReducer(undefined, {})).toEqual({ data: {} });
    });

});