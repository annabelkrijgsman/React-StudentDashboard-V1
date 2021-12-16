import { useState, useEffect} from 'react'
import Papa from 'papaparse'
import file from '../../Data/studentMockData.csv'
import Chart from '../Chart/Chart'
import Form from '../Forms/Form'
import Students from '../Students/Students'
import StudentProfiles from '../Students/StudentProfiles'

const Main = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('')
    const [difficultyChecked, setDifficultyChecked] = useState(true)
    const [enjoyChecked, setEnjoyChecked] = useState(true)
    const [lineChartChecked, setLineChart] = useState(false)
    const [sortDifficultyAscendingChecked, setSortDifficultyAscending] = useState(false)
    const [sortEnjoymentAscendingChecked, setSortEnjoymentAscending] = useState(false)

    useEffect(() => {
        Papa.parse(file, {
            download: true,
            header: true,
            complete: (results) => {
                setData(results.data)
                setIsLoading(false)
            }
        })
    }, [])

    const onStudentSelect = (event) => {
        setName(event.target.innerText)
    }

    const onAllSelect = () => {
        setName('')
    }

    const toggleDifficulty = () => {
        setDifficultyChecked(!difficultyChecked)
    }

    const toggleEnjoyment = () => {
        setEnjoyChecked(!enjoyChecked)
    }

    const toggleLineChart = () => {
        setLineChart(!lineChartChecked)
    }

    const toggleSortDifficultyAscending = () => {
        setSortDifficultyAscending(!sortDifficultyAscendingChecked)
    }

    const toggleSortEnjoymentAscending = () => {
        setSortEnjoymentAscending(!sortEnjoymentAscendingChecked)
    }

    return (
        <main>
            <nav>
                <Students 
                    data={data}
                    isLoading={isLoading}
                    name={name}
                    onStudentSelect={onStudentSelect}
                    onAllSelect={onAllSelect}
                />
                <StudentProfiles 
                    name={name}
                />
                <Form 
                    checkedDiff={difficultyChecked}
                    onChangeDiff={toggleDifficulty}
                    checkedEnjoy={enjoyChecked}
                    onChangeEnjoy={toggleEnjoyment}
                    checkedLineChart={lineChartChecked}
                    onChangeLineChart={toggleLineChart}
                    checkedSortDiffAsc={sortDifficultyAscendingChecked}
                    onChangeDiffAsc={toggleSortDifficultyAscending}
                    checkedSortEnjoyAsc={sortEnjoymentAscendingChecked}
                    onChangeEnjoyAsc={toggleSortEnjoymentAscending}
                />
            </nav>
            <Chart
                data={data}
                isLoading={isLoading}
                name={name}
                difficultyChecked={difficultyChecked}
                enjoyChecked={enjoyChecked}
                lineChartChecked={lineChartChecked}
                sortDifficultyAscendingChecked={sortDifficultyAscendingChecked}
                sortEnjoymentAscendingChecked={sortEnjoymentAscendingChecked}
            />
        </main>
    )
}

export default Main