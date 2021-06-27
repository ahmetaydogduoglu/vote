import {
    SET_EMPLOYEE,
    SET_LOADING
} from './types';

export const setEmployee = (data) => {    
    return {
        type: SET_EMPLOYEE,
        payload: data
    };
};

export const setLoading = (value) => ({
    type: SET_LOADING,
    payload: value
});
