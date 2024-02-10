


function EducationPreview({university, degree, degreelevel, gradyear}) {
    return (
        <>
            <div className="top-section">
                <h3 className="section-header">EDUCATION</h3>
                <hr className="divider"></hr>
                <div className="section">
                    <span className="uni">
                        <p className="college">{university}</p>
                        <p className="degree"> {degreelevel} in {degree} </p>
                    </span>
                    
                    <p>{gradyear}</p>
                </div>
            </div>
        </>
    )
}

export default EducationPreview;