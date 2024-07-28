import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header w-full'>
            <div>
            <h1 className="text-xl sm:text-2xl
             md:text-2xl lg:text-3xl xl:text-xl
             text-center">P-HERO-QUIZ</h1>
               
            </div>           
            <nav className='nav'>
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