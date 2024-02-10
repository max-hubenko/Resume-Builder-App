/* eslint-disable react/prop-types */
import './index.css'

function Experience({onDataSubmit}) {
    const submitForm = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)

        onDataSubmit(payload)
    }
    return (
        <div className='general-container'>
            <h1>Experience</h1>
            <form onSubmit={submitForm} className='general-form'>
                <span>
                    <label>Job Title</label>
                    <input type='text' name='job'></input>
                </span>
                <span>
                    <label>Company</label>
                    <input type='text' name='company'></input>
                </span>
                <span>
                    <label>Start Date</label>
                    <input type='date' name='startdate'></input>
                </span>
                <span>
                    <label>End Date</label>
                    <input type='date' name='enddate'></input>
                </span>
                <span>
                    <label>Job Description</label>
                    <input type='text' name='jobdesc'></input>
                </span>
                <span className='button-span'>
                    <button type="submit" className='submit-button'>Add</button>
                    <button className='submit-button'>Remove</button>
                </span>
            </form>
        </div>
    )
} 


export default Experience