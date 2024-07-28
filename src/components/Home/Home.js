import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {   
        const topics = useLoaderData();
        console.log(topics); 
          return (
            <div>
                <div className='banner'>                           
                    <h2 className="text-blue-500 text-2xl 
                    sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl
                    font-bold">Welcome To Quiz Home . Click any Topic to start.</h2>
                    <img src='banner.png' alt="Banner" className="w-full h-40"/>      
                
                </div>
                     <div className='topics'>
                       
                        {
                        topics.map((topic)=><Topic
                        key={topic.id}
                        topic={topic}
                        ></Topic>)                      
                        }
                       
                        
                    </div>
            </div>
         
    );
};
export default Home;

