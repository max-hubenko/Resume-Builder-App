
function Header({fullname, email, phone, address}) {
    return(
        <>
            <h1 className="name">{fullname}</h1>
            <div className="subheading">
                <h3>{email}</h3>
                <h3>♦</h3>
                <h3>{phone}</h3>
                <h3>♦</h3>
                <h3>{address}</h3>
            </div>
        </>
    )
}


export default Header