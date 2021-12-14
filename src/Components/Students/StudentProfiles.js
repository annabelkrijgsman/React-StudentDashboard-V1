import React from 'react'
import studentData from '../../Data/studentProfilesData'

const StudentProfiles = ({name}) => {
    const studentState = {
        students: studentData,
        name: name
    }

    const randomStudent = studentState.students[Math.floor(Math.random() * studentState.students.length)]

    return (
        <>
            {name ? 
                <div className="student-area">
                    <h4>Student profile</h4>
                    <div className="student-card">
                        <div className="avatar">
                            <img src={randomStudent.avatar} alt="avatar"/>
                        </div>
                        <div className="card-header">
                            <h3>{name} {randomStudent.lastName}</h3>
                        </div>
                        <div className="card-body">
                            <label htmlFor="age">Age: </label>
                            <span id="age">{randomStudent.age}</span><br />
                            <label htmlFor="phone">Phone: </label>
                            <span id="phone">{randomStudent.phone}</span><br />
                            <label htmlFor="email">Email: </label>
                            <span id="email">{randomStudent.email}</span>
                        </div>
                    </div>
                </div>
             : null}   
        </>
    )
}

export default StudentProfiles