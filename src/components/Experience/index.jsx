/* eslint-disable react/prop-types */
import './index.css'

function Experience({onDataSubmit}) {
    const submitFormAdd = (e) => {
        e.preventDefault();

        const formData = new FormData(document.getElementById("experience-form"));
        const payload = Object.fromEntries(formData);
        if (payload.job != "" && payload.company != "" && payload.startdate != "" && payload.enddate != "") {
            onDataSubmit("add", payload);
            document.getElementById("experience-form").reset()
        }

    }

    const submitFormRemove = (e) => {
        e.preventDefault();

        const formData = new FormData(document.getElementById("experience-form"));
        const payload = Object.fromEntries(formData);
        onDataSubmit("remove", payload);
    }
    return (
        <div className='general-container'>
            <h1>Experience</h1>
            <form className='general-form' id="experience-form">
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
                    <button onClick={submitFormAdd} type="submit" name="submitAction" value="add" className='submit-button'>Add</button>
                    <button onClick={submitFormRemove} name="submitAction" value="remove" className='submit-button'>Remove</button>
                </span>
            </form>
        </div>
    )
} 


export default Experience