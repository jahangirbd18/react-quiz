import React from 'react';
import './Topic.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
const Topic = ({topic}) => {
    const{name,logo,total}=topic;
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`/home/${name}`)
        // navigate(`/home/react`)
    }
    return (
        <div className='topic'>  
            <div className='head'>
                <h4> Total Question:{total}</h4>                 
            </div>         
                <div className='body'>
                  <img src={logo} alt=''></img>
                </div>            
            <div className='tail'>
                    <h5> {name}</h5>             
            <Button variant="primary" className="border border-dark" onClick={handleNavigate}>
          START PRACTICE</Button>
            </div>
            
        </div> );
};

export default Topic;