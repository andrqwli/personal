import React from 'react'

function Coursework({courseCode, courseName, courseSem, prof, desc}) {
    return (
        <div>
            <h5>{courseCode} - {courseName} - {courseSem}</h5>
            <h6>Prof. {prof}</h6>
            <p>{desc}</p>
        </div>
    )
}

export default Coursework
