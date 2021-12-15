import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const AverageBarChart = ({ name, difficultyChecked, enjoyChecked, individualRatings, averageRatings, renderCustomTick }) => {
    return (
        <ResponsiveContainer width="100%" aspect={5}>
            <BarChart
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
                    horizontal={true}
                    vertical={false}
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
                <Bar 
                    name="Difficulty"
                    dataKey="difficultyRating" 
                    fill='#D16A33'
                />
                ) : null}
                {enjoyChecked ? (
                <Bar 
                    name="Enjoyment"
                    dataKey="enjoymentRating" 
                    fill='#A3C85A'
                />
                ) : null}
            </BarChart>
        </ResponsiveContainer>
    )
}

export default AverageBarChart