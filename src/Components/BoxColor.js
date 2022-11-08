
function BoxColor({r, g, b}){

    const cor = r > 128 ? 'white' : 'black'
    const style = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgb('+ r + ',' + g + ',' + b + ')',
        width: '800px',
        height: '150px',
        color: cor,
        fontFamily: 'Arial',
        fontSize: '24px',
        textAlign: 'center',
        border: '1px solid black'

    }



    return (
        <div style={style}>
            <p>rgb({r} , {g}, {b})</p>
            <p>#{r.toString(16)}{g.toString(16)}{b.toString(16)}</p>
        </div>
    )
}

export default BoxColor