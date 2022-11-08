
function Random({min, max}){

    return (
        <div className="greetings">
            Random value betwen {min} and {max} =&gt; {Math.floor(Math.random() * (max - min) + min)}
        </div>
    )
}

export default Random