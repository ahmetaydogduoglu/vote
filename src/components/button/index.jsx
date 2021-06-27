import React from 'react';

//style
import './button.scss';

const Button = ({ text, onClick, size = 'medium', outlined = false }) => {

    return (
        <button
            onClick={onClick}
            className={`appButton appButton--${size} ${outlined && 'appButton--outlined'}`}>
            {text}
        </button>
    );
}

export default Button
