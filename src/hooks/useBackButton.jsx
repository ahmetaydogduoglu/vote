import { useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { setButtonVisibility } from '../redux/layoutState/actions';

export const useBackButton = ({ visibility }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setButtonVisibility(visibility));
    }, []);
}