

function ExperiencePreview({job, company, startdate, enddate, jobdesc}) {
    const start = new Date(startdate.replace('-',','));
    const end = new Date(enddate.replace('-',','));
    const monthNames = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
    return(
        <div className="bottom-section"> 
            <h3 className="section-header">EXPERIENCE</h3>
            <hr className="divider"></hr>
            <div className="section">
                <span className="job">
                    <p className="job-title">{job}</p>
                    <p className="company"> {company} </p>
                </span>
                <p>{monthNames[start.getMonth()]} {start.getFullYear()} - {monthNames[end.getMonth()]} {end.getFullYear()}</p>
            </div>
            <li className="job-desc"> {jobdesc} </li>
        </div>

    )
}


export default ExperiencePreview