import React from 'react';

import { useHistory } from 'react-router-dom';

//style
import './profileCard.scss';

//redux
import { useDispatch } from 'react-redux';
import { increaseVote } from '../../redux/employees/actions';
import { setLoading } from '../../redux/employeeDetail/actions';

//components
import Button from '../button';

const ProfileCard = ({ id, firstName, lastName, avatar, email, jobTitle, vote }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const goProfile = () => {
        dispatch(setLoading(true));
        history.push(`/profil/${id}`);
    }

    return (
        <div className="profileCard" onClick={goProfile}>
            <img className="profileCard-avatar" src={avatar} width={70} height={70} alt="avatar" />

            <div className="profileCard-textContent">
                <span className="profileCard-text">Name: {firstName} {lastName}</span>
                <span className="profileCard-text">Title: {jobTitle}</span>
                <span className="profileCard-text">Vote Count: {vote}</span>
            </div>

            <Button text={'Oy Ver!'} onClick={event => {
                event.stopPropagation();
                dispatch(increaseVote(id));
            }} />
        </div>
    );
}

export default ProfileCard;
