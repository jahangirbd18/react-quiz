import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                 <NavLink className={({isActive})=>isActive? 
                 'active':undefined} to='/home'>Home</NavLink>
                 <NavLink to='/topics'>Topics</NavLink>
                 <NavLink to='/statistics'>Statistics</NavLink>
                 <NavLink to='/blog'>Blog</NavLink>
                 


            </nav>
        </div>
    );
};

export default Header;