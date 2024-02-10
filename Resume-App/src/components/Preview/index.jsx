/* eslint-disable react/prop-types */
import EducationPreview from "./EducationPreview"
import ExperiencePreview from "./ExperiencePreview"
import Header from "./Header"
import "./index.css"



// eslint-disable-next-line react/prop-types
function Preview({data}) {

    return (
        <div className="preview-container">
            <div className="resume-page">
                <Header fullname={data.general.fullname} email={data.general.email} phone={data.general.phone} address={data.general.address} />
                <div className="section-container">
                    <EducationPreview university={data.education.university} gradyear={data.education.gradyear} degree={data.education.degree} degreelevel={data.education.degreelevel}/>
                    <ExperiencePreview job={data.experience.job} startdate={data.experience.startdate} enddate={data.experience.enddate} jobdesc={data.experience.jobdesc}/>
                </div>
            </div>
        </div>
    )
}


export default Preview