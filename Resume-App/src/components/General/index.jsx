import './index.css'

function General({onDataSubmit}) {

    const submitForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
        console.log(payload)
        onDataSubmit(payload);
        e.target.reset();
    }
    return (
        <div className='general-container'>
            <h1>General Information</h1>
            <form onSubmit={submitForm} className='general-form'>
                <span>
                    <label>Full Name</label>
                    <input required type='text' name='fullname'></input>
                </span>
                <span>
                    <label>Email</label>
                    <input required type='email' name="email"></input>
                </span>
                <span>
                    <label>Phone Number</label>
                    <input required type='tel' name="phone"></input>
                </span>
                <span>
                    <label>Location</label>
                    <input required type='text' name="address"></input>
                </span>
                <span className='submit-span'>
                    <input required className='submit-button' type='submit'></input>
                </span>
            </form>
        </div>
    )
} 


export default General