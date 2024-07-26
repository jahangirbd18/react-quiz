import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>This is main Quiz Page</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;