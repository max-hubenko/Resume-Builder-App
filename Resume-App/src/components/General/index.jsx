import './index.css'

function General() {
    return (
        <div className='general-container'>
            <h1>General Information</h1>
            <form className='general-form'>
                <span>
                    <label>Full Name</label>
                    <input type='text' name='name'></input>
                </span>
                <span>
                    <label>Email</label>
                    <input type='email'></input>
                </span>
                <span>
                    <label>Phone Number</label>
                    <input type='tel'></input>
                </span>
                <span>
                    <label>Location</label>
                    <input type='text'></input>
                </span>
                <span className='submit-span'>
                    <input className='submit-button' type='submit'></input>
                </span>
            </form>
        </div>
    )
} 


export default General