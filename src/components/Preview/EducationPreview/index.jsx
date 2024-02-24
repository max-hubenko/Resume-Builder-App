

function EducationObject({university, degree, degreelevel, gradyear}) {

    return (
        <div className="section">
            <span className="uni">
                <p className="college">{university}</p>
                <p className="degree"> {degreelevel} in {degree} </p>
            </span>
            
            <p>{gradyear}</p>
        </div>
    )
}

function EducationPreview({educationArray}) {

    return (
        <div className="top-section">
                <h3 className="section-header">EDUCATION</h3>
                <hr className="divider"></hr>
            <ul className="EducationList">
                {educationArray.map((education, index) => (
                <EducationObject key={index} university={education.university} degree={education.degree} degreelevel={education.degreelevel} gradyear={education.gradyear}/>
            ))}
            </ul>
        </div>
    )
}

export default EducationPreview;