import React from 'react'

function LogEntry({meetingDate, workSummary, resourceList}) {

    return (
        <div className="LogEntry">
            <h4>Week of {meetingDate}</h4>
            <p>{workSummary}</p>
            <h5>Resources:</h5>
            <div className="resources">
                {resourceList.map((resource) => 
                    <div className="individual-resource">
                        <a href={resource.link} without rel="noopener noreferrer" target="_blank">
                            <h6>{resource.title}</h6>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LogEntry;