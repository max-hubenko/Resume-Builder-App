function ExperienceObject({job, company, startdate, enddate, jobdesc}) {
    const start = new Date(startdate.replace('-',','));
    const end = new Date(enddate.replace('-',','));
    const monthNames = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
    return(
            <>
                <div className="section">
                    <span className="job">
                        <p className="job-title">{job}</p>
                        <p className="company">{company}</p>
                    </span>
                    <p>{monthNames[start.getMonth()]} {start.getFullYear()} - {monthNames[end.getMonth()]} {end.getFullYear()}</p>
                </div>
                <li className="job-desc"> {jobdesc} </li>
            </>
    )
}

function ExperiencePreview({workArray}) {
    
    return(
        <div className="bottom-section"> 
                    <h3 className="section-header">EXPERIENCE</h3>
                    <hr className="divider"></hr>
            <ul className="work-list">
                
                {workArray.map((work, index) => 
                        <ExperienceObject key={index} job={work.job} company={work.company} startdate={work.startdate} enddate={work.enddate} jobdesc={work.jobdesc}/>
                )}
            </ul>
        </div>
    )
}


export default ExperiencePreview