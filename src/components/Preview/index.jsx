/* eslint-disable react/prop-types */
import EducationPreview from "./EducationPreview"
import ExperiencePreview from "./ExperiencePreview"
import Header from "./Header"
import "./index.css"



// eslint-disable-next-line react/prop-types
function Preview({educationArray, workArray, generalData}) {
    return (
        <div className="preview-container">
            <div className="resume-page">
                <Header fullname={generalData.fullname} email={generalData.email} phone={generalData.phone} address={generalData.address} />
                <div className="section-container">
                    <EducationPreview educationArray={educationArray}/>
                    <ExperiencePreview workArray={workArray}/>
                </div>
            </div>
        </div>
    )
}


export default Preview