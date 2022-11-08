

function IdCard({picture, firstName, lastName, gender, height, birth}){

    return (
        <div className="idCard-border">
            <img src={picture} alt="profile pic" />
            <div className="info">
                <p><span>First Name:</span> {firstName}</p>
                <p><span>Last Name:</span> {lastName}</p>
                <p><span>Gender:</span> {gender}</p>
                <p><span>Height:</span> {height}</p>
                <p><span>Birth:</span> {birth}</p>
            </div>

        </div>
    )
}

export default IdCard