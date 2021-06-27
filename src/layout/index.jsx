import React from 'react'

//style
import './layout.scss';

//components
import Navbar from '../components/navbar';

const Layout = ({ children }) => {
    return (
        <div className="appLayout">
            <Navbar />
            <div className="appLayout-container">
                {children}
            </div>
        </div>
    );
}

export default Layout
