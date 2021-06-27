import {
    INCREASE_VOTE,
    SET_EMPLOYEES
} from './types';

export const setEmployees = (list) => ({
    type: SET_EMPLOYEES,
    payload: list
});

export const increaseVote = (id) => ({
    type: INCREASE_VOTE,
    payload: id
});