import React from 'react'

const Form = ({checkedDiff, onChangeDiff, checkedEnjoy, onChangeEnjoy, checkedLineChart, onChangeLineChart, checkedSortDiffAsc, onChangeDiffAsc, checkedSortEnjoyAsc, onChangeEnjoyAsc}) => {
    return (
        <form>
            <h4>Choose an option below</h4>
            <label htmlFor="difficulty" className='checkbox-container'>
                <input
                    type="checkbox"
                    className="check-difficulty"
                    id="difficulty"
                    name="rating"
                    value="difficulty"
                    checked={checkedDiff}
                    onChange={onChangeDiff}
                />
                Difficulty
                <span className="checkmark"></span>
            </label>
            <label htmlFor="enjoyment" className="checkbox-container">
                <input
                    type="checkbox"
                    className="check-enjoyment"
                    id="enjoyment"
                    name="rating"
                    value="enjoyment"
                    checked={checkedEnjoy}
                    onChange={onChangeEnjoy}
                />
                Enjoyment
                <span className="checkmark"></span>
            </label>
            <label htmlFor="line-chart" className="checkbox-container">
                <input
                    type="checkbox"
                    className="check-linechart"
                    id="line-chart"
                    name="rating"
                    value="line-chart"
                    checked={checkedLineChart}
                    onChange={onChangeLineChart}
                />
                Show as linechart
                <span className="checkmark"></span>
            </label>
            <label htmlFor="sort-diff-asc" className="checkbox-container">
                <input
                    type="checkbox"
                    className="check-sort-diff-asc"
                    id="sort-diff-asc"
                    name="rating"
                    value="sortDiffAsc"
                    checked={checkedSortDiffAsc}
                    onChange={onChangeDiffAsc}
                />
                Sort difficulty ascending
                <span className="checkmark"></span>
            </label>
            <label htmlFor="sort-fun-asc" className="checkbox-container">
                <input
                    type="checkbox"
                    className="check-sort-fun-asc"
                    id="sort-fun-asc"
                    name="rating"
                    value="sortFunAsc"
                    checked={checkedSortEnjoyAsc}
                    onChange={onChangeEnjoyAsc}
                />
                Sort enjoyment ascending
                <span className="checkmark"></span>
            </label>
        </form>
    )
}

export default Form