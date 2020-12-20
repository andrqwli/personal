import React from 'react'

function Jobs({company, title, time}) {
    return (
        <div className="job">
            <h5>{company}</h5>
            <h6>{title} | {time}</h6>
        </div>
    )
}

export default Jobs
