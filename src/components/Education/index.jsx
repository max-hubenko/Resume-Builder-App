/* eslint-disable react/prop-types */
import './index.css'

function Education({onDataSubmit}) {
    const submitFormAdd = (e) => {
        e.preventDefault();

        const formData = new FormData(document.getElementById("education-form"));
        const payload = Object.fromEntries(formData);
        if (payload.university != "" && payload.degree != "" && payload.degreelevel != "" && payload.gradyear != "") {
            onDataSubmit("add", payload);
            document.getElementById("education-form").reset()
        }

    }

    const submitFormRemove = (e) => {
        e.preventDefault();

        const formData = new FormData(document.getElementById("education-form"));
        const payload = Object.fromEntries(formData);
        onDataSubmit("remove", payload);
    }
    return (
        <div className='general-container'>
            <h1>Education</h1>
            <form className='general-form' id="education-form">
                <span>
                    <label>University</label>
                    <input type='text' name='university'></input>
                </span>
                <span>
                    <label>Degree</label>
                    <input type='text' name='degree'></input>
                </span>
                <span>
                    <label>Degree level</label>
                    <input type='text' name='degreelevel'></input>
                </span>
                <span>
                    <label>Graduation Year</label>
                    <input type='number' name='gradyear'></input>
                </span>
                <span className='button-span'>
                    <button onClick={submitFormAdd} className='submit-button'>Add</button>
                    <button onClick={submitFormRemove} name="submitAction" value="remove" className='submit-button'>Remove</button>
                </span>
            </form>
        </div>
    )
} 


export default Education