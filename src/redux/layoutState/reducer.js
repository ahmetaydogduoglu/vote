import { SET_BACK_BUTTON_VISIBILITY } from './types';

const initialState = {
    backButtonVisibility: false
}

const layoutStateReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_BACK_BUTTON_VISIBILITY:
            return {
                ...state,
                backButtonVisibility: payload
            }

        default:
            return state;
    }
}

export default layoutStateReducer;
