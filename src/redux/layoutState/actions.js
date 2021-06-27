import { SET_BACK_BUTTON_VISIBILITY } from './types';

export const setButtonVisibility = (visibility) => ({
    type: SET_BACK_BUTTON_VISIBILITY,
    payload: visibility
});
