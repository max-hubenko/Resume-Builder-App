import './index.css'

function General({onDataSubmit}) {

    const submitForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
        onDataSubmit(payload);
    }
    return (
        <div className='general-container'>
            <h1>General Information</h1>
            <form onSubmit={submitForm} className='general-form'>
                <span>
                    <label>Full Name</label>
                    <input type='text' name='fullname'></input>
                </span>
                <span>
                    <label>Email</label>
                    <input type='email' name="email"></input>
                </span>
                <span>
                    <label>Phone Number</label>
                    <input type='tel' name="phone"></input>
                </span>
                <span>
                    <label>Location</label>
                    <input type='text' name="address"></input>
                </span>
                <span className='submit-span'>
                    <input className='submit-button' type='submit'></input>
                </span>
            </form>
        </div>
    )
} 


export default General