import './index.css'

function Experience() {
    return (
        <div className='general-container'>
            <h1>Experience</h1>
            <form className='general-form'>
                <span>
                    <label>Job Title</label>
                    <input type='text' name='University'></input>
                </span>
                <span>
                    <label>Company</label>
                    <input type='text' name='Degree'></input>
                </span>
                <span>
                    <label>Start Date</label>
                    <input type='date' name='Degree'></input>
                </span>
                <span>
                    <label>End Date</label>
                    <input type='date' name='University'></input>
                </span>
                <span>
                    <label>Job Description</label>
                    <input type='text' name='job-desc'></input>
                </span>
                <span className='button-span'>
                    <button className='submit-button'>Add</button>
                    <button className='submit-button'>Remove</button>
                </span>
            </form>
        </div>
    )
} 


export default Experience