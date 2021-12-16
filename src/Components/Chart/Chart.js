import React from 'react'
import AverageBarChart from './AverageBarChart'
import AverageLineChart from './AverageLineChart'
import SortedAverageBarchart from './SortedAverageBarChart'
  
function Chart({ data, isLoading, name, difficultyChecked, enjoyChecked, lineChartChecked, sortDifficultyAscendingChecked, sortEnjoymentAscendingChecked }) {

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

  const sortDifficultyAverageAscending = () => {
    console.log(difficultyChecked)
    if (sortDifficultyAscendingChecked) {
      let averageRatings = getAverageRatings()
      let sortedAscending = averageRatings.sort((a, b) => {
        return a.difficultyRating.localeCompare(b.difficultyRating)
      })
      enjoyChecked = false
      return sortedAscending
    }
  }

  const sortEnjoymentAverageAscending = () => {
    console.log(enjoyChecked)
    if (sortEnjoymentAscendingChecked) {
      let averageRatings = getAverageRatings()
      let sortedAscending = averageRatings.sort((a, b) => {
        return a.enjoymentRating.localeCompare(b.enjoymentRating)
      })
      difficultyChecked = false
      return sortedAscending
    }
  }

  const individualRatings = getIndividualRatings()
  const averageRatings = getAverageRatings()
  const sortDifficultyAscending = sortDifficultyAverageAscending()
  const sortEnjoymentAscending = sortEnjoymentAverageAscending()
  

  return (
    <div className="chart">
        {sortDifficultyAscendingChecked || sortEnjoymentAscendingChecked ? (
          <SortedAverageBarchart
            sortDifficultyAscendingChecked={sortDifficultyAscendingChecked}
            sortEnjoymentAscendingChecked={sortEnjoymentAscendingChecked}
            sortDifficultyAscending={sortDifficultyAscending}
            sortEnjoymentAscending={sortEnjoymentAscending}
            renderCustomTick={renderCustomTick}
          />
        ) : !lineChartChecked ? (
            <AverageBarChart 
              name={name}
              difficultyChecked={difficultyChecked}
              enjoyChecked={enjoyChecked}
              individualRatings={individualRatings}
              averageRatings={averageRatings}
              renderCustomTick={renderCustomTick}
            />
        ) : 
            <AverageLineChart 
              name={name}
              difficultyChecked={difficultyChecked}
              enjoyChecked={enjoyChecked}
              individualRatings={individualRatings}
              averageRatings={averageRatings}
              renderCustomTick={renderCustomTick}
            />
      }
    </div>
  )
}

export default Chart