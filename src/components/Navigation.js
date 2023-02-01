import React from 'react';
import {Link} from 'react-router-dom';
import "./navigation.scss"


const Navigation = () => {
    return (
        <div>
            <div className="nav">
                <ul>
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    
                </ul>
            </div >
            
        </div>
    );
};

export default Navigation;