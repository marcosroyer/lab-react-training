import Rating from "./Rating"

function DriveCard({name, rating, img, car}){

    const principal = {
        width: '800px',
        height: '150px',
        padding: '20px',
        backgroundColor: '#455eb6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px',
        borderRadius: '5px'

    }

    const imagem = {
        width: '100px',
        height: '100px',
        borderRadius: '50%'
    }

    const dados = {
        fontSize: '24px',
        fontFamily: 'Arial',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '20px'
    }

    const carro = {
        fontSize: '16px',
        fontWeight: '100'
    }

    return (

        <div id="principal" style={principal}>
            <div id="profilePic"><img src={img} alt="profile pic" style={imagem}/></div>
            <div id="dados" style={dados}>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p style={carro}>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriveCard