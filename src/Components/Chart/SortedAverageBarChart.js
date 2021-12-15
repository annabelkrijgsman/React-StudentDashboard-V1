import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const SortedAverageBarchart = ({ 
    sortDifficultyAscendingChecked, 
    sortEnjoymentAscendingChecked, 
    sortDifficultyAscending, 
    sortEnjoymentAscending, 
    renderCustomTick }) => {

    return (
        <ResponsiveContainer width="100%" aspect={5}>
            {sortDifficultyAscendingChecked ?
                <BarChart 
                    data={sortDifficultyAscending}
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
                    <Bar 
                        name="Difficulty"
                        dataKey="difficultyRating" 
                        fill='#D16A33'
                    />
                </BarChart>
            : sortEnjoymentAscendingChecked ?
                <BarChart 
                    data={sortEnjoymentAscending}
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
                    <Bar 
                        name="Enjoyment"
                        dataKey="enjoymentRating" 
                        fill='#A3C85A'
                    />
                </BarChart>
            : null }
        </ResponsiveContainer>
    )
}

export default SortedAverageBarchart