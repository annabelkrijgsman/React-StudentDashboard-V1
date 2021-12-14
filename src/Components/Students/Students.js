import { Link } from "react-router-dom";

function Students({ data, isLoading, onStudentSelect, onAllSelect }) {
  const getNames = () => {
    if (!isLoading) {
      const names = data.map((item) => item.name)
      let uniqueNames = [...new Set(names)]
      const list = uniqueNames.map((name, index) => (
        <Link
          className="students-link"
          to={`/${name}`}
          key={index}
          value={name}
          onClick={onStudentSelect}
          role="listitem"
        >
          {name}
        </Link>
      ));
      return list
    }
  }

  const names = getNames()

  return (
    <div className="students-nav" role="list">
      <h4>Click on a student below to see their individual ratings</h4>
      <div className="students">
        <Link
            className="students-link"
            to={`/`}
            onClick={onAllSelect}
            role="listitem"
          >
            All students
          </Link>
          {names}
      </div>
    </div>
  )
}

export default Students