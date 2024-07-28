import React from 'react';
import './Topic.css';
import { Button } from 'react-bootstrap';
const Topic = ({topic}) => {
    const{id,name,logo,total}=topic;
    return (
        <div className='topic'>  
            <div className='head'>
                <h4> Total:{total}</h4> 
                <h4> ID:{id}</h4>
            </div>         
           <div className='body'>
                <img src={logo} alt=''></img>
           </div>
            
            <div className='tail'>
                    <h6> {name}</h6>             
            <Button variant="primary" className="border border-dark">
          START PRACTICE</Button>
            </div>
            
        </div>    );
};

export default Topic;