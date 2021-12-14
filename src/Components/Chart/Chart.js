import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
  
function Chart({ data, isLoading, name, difficultyChecked, enjoyChecked, lineChartChecked }) {
  const getIndividualRatings = () => {
    if (!isLoading) {
      const individualRating = data.filter((record) => record.name === `${name}`)
      return individualRating
    }
  }

  const getAverageRatings = () => {
    if (!isLoading) {
      const assignments = data.map((record) => record.assignment)
      let uniqueAssignments = [...new Set(assignments)]

      const newArray = uniqueAssignments.map((assignment) => {
        let difficulty = 0
        let enjoyment = 0
        let itemCount = 0
        data.forEach((item) => {
          if (assignment === item.assignment) {
            difficulty += parseInt(item.difficultyRating)
            enjoyment += parseInt(item.enjoymentRating)
            itemCount += 1
          }
        })
        return {
          assignment: assignment,
          difficultyRating: (difficulty / itemCount).toFixed(1),
          enjoymentRating: (enjoyment / itemCount).toFixed(1),
        }
      })
      return newArray
    }
  }

  const individualRatings = getIndividualRatings()
  const averageRatings = getAverageRatings()

  const renderCustomTick = (assingmentName) => {
    if (assingmentName.toString().includes(" ")) {
      const searchTerm = " "
      const indexOfFirst = assingmentName.toString().indexOf(searchTerm)
      const customTick = `${assingmentName
        .toString()
        .substring(0, indexOfFirst)
        .concat("-P")
      }`
      return customTick
    }
    return assingmentName
  }

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" aspect={4}>
        {!lineChartChecked ? 
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
        : 
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
        }
      </ResponsiveContainer>
    </div>
  )
}

export default Chart