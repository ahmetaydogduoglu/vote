import {
    INCREASE_VOTE,
    SET_EMPLOYEES
} from './types';

const initialState = {
    employeesList: [],
    loading: true
}

const employeeReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case INCREASE_VOTE:
            let employeesList = [...state.employeesList];
            const foundIndex = employeesList.findIndex(item => item.id === payload);

            if (foundIndex > -1) {
                employeesList[foundIndex] = {
                    ...employeesList[foundIndex],
                    vote: employeesList[foundIndex].vote + 1
                };

                return {
                    ...state,
                    employeesList: employeesList.sort((a, b) => b.vote - a.vote)
                };
            }

            return state;
        case SET_EMPLOYEES:
            return {
                ...state,
                employeesList: payload,
                loading: false
            };
        default:
            return state;
    }
}

export default employeeReducer;
