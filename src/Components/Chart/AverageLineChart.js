import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const AverageLineChart = ({ name, difficultyChecked, enjoyChecked, individualRatings, averageRatings, renderCustomTick }) => {
    return (
        <ResponsiveContainer width="100%" aspect={5}>
            <LineChart
                width={500}
                height={300}
                data={name ? individualRatings : averageRatings}
                margin={{
                top: 5,
                right: 50,
                left: 0,
                bottom: 5,
                }}
            >
                <CartesianGrid 
                    strokeDasharray="3 3" 
                />
                <XAxis 
                    dataKey="assignment"
                    type="category"
                    tick={{ fontSize: 15 }}
                    tickFormatter={renderCustomTick}
                />
                <YAxis 
                    type="number"
                    allowDecimals={false}
                    tickCount={10}
                    domain={[0, 5]}
                    interval={0}
                    tickLine={false}
                />
                <Tooltip />
                <Legend 
                    verticalAlign="top"
                />
                {difficultyChecked ? (
                <Line 
                    name="Difficulty"
                    type="monotone" 
                    dataKey="difficultyRating" 
                    stroke="#D16A33" 
                    activeDot={{ r: 8 }} 
                />
                ) : null}
                {enjoyChecked ? (
                <Line 
                    name="Enjoyment"
                    type="monotone" 
                    dataKey="enjoymentRating" 
                    stroke="#A3C85A" 
                />
                ) : null}
            </LineChart>
        </ResponsiveContainer>
    )
}

export default AverageLineChart