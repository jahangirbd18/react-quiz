import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const data = [
        {
            name: 'Total Questions',
            questions: 36,
        },
    ];

    return (
        <div>
            <h1>From Statistics</h1>
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="questions" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statistics;
