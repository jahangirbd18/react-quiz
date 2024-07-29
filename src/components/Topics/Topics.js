

import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const Topics=useLoaderData();
      
    return (
        <div>
            <h1>From Topics:{Topics.length}</h1> 
            
        </div>
    );
};
export default Topics;