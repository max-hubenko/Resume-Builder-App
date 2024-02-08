import "./index.css"

function Preview() {
    return (
        <div className="preview-container">
            <div className="resume-page">
                <h1 className="name"> Johnny Appleseed</h1>
                <div className="subheading">
                    <h3>email@email.com</h3>
                    <h3>♦</h3>
                    <h3>630-400-4000</h3>
                    <h3>♦</h3>
                    <h3>Aurora, IL</h3>
                </div>
                <div className="section-container">
                    <div className="top-section">
                        <h3 className="section-header">EDUCATION</h3>
                        <hr className="divider"></hr>
                        <div className="section">
                            <span className="uni">
                                <p className="college">Wisconsin-Madison</p>
                                <p className="degree"> Bachelor of Arts in Computer Science </p>
                            </span>
                            
                            <p>May 2026</p>
                        </div>
                    </div>
                    <div className="bottom-section"> 
                        <h3 className="section-header">EXPERIENCE</h3>
                        <hr className="divider"></hr>
                        <div className="section">
                            <span className="job">
                                <p className="job-title">Software Engineer</p>
                                <p className="company"> Google </p>
                            </span>
                            <p>June 2026 - Current</p>
                        </div>
                        <li className="job-desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quam. Iure sunt, at quibusdam atque animi accusantium nisi voluptatum commodi, saepe quis similique error architecto perspiciatis corporis itaque pariatur eveniet.</li>
                    </div>
                
                </div>

            </div>
        </div>
    )
}


export default Preview