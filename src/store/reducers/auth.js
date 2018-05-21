import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                error: null,
                loading: true
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                userId: action.localId,
                token: action.token,
                loading: false,
                error: null
            };
        case actionTypes.AUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                error: null,
                loading: false
            };
        default:
            return state;
    }
}
export default reducer;