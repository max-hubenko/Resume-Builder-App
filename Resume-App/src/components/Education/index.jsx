import './index.css'

function Education() {
    return (
        <div className='general-container'>
            <h1>Education</h1>
            <form className='general-form'>
                <span>
                    <label>University</label>
                    <input type='text' name='University'></input>
                </span>
                <span>
                    <label>Degree</label>
                    <input type='text' name='Degree'></input>
                </span>
                <span>
                    <label>Degree level</label>
                    <input type='text' name='Degree'></input>
                </span>
                <span>
                    <label>Graduation Year</label>
                    <input type='number' name='University'></input>
                </span>
                <span className='button-span'>
                    <button className='submit-button'>Add</button>
                    <button className='submit-button'>Remove</button>
                </span>
            </form>
        </div>
    )
} 


export default Education