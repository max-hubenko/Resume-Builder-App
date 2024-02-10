/* eslint-disable react/prop-types */
import './index.css'

function Education({onDataSubmit}) {
    const submitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        onDataSubmit(payload);
    }
    return (
        <div className='general-container'>
            <h1>Education</h1>
            <form onSubmit={submitForm}className='general-form'>
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
                    <button type="submit" className='submit-button'>Add</button>
                    <button className='submit-button'>Remove</button>
                </span>
            </form>
        </div>
    )
} 


export default Education