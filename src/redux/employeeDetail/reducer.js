import {
    SET_EMPLOYEE,
    SET_LOADING
} from './types';

const initialState = {
    employee: null,
    loading: true
}

const employeeDetailReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_EMPLOYEE:
            return {
                ...state,
                employee: payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            };
        default:
            return state;
    }
}

export default employeeDetailReducer;
