import React from 'react'
import { Link, useHistory } from 'react-router-dom';

//style
import './navbar.scss';

//redux 
import { useSelector } from 'react-redux';

const Navbar = () => {
    const history = useHistory();

    const layoutState = useSelector(state => state.layoutState);

    return (
        <div className="navbar">
            {
                layoutState.backButtonVisibility && <span className="navbar-back" onClick={() => {
                    history.goBack()
                }}>Back</span>
            }
            <Link className="navbar-title" to="/">Vote!</Link>
        </div>
    );
}

export default Navbar