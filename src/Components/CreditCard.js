import visa from '../assets/images/visa.png'
import master from '../assets/images/visa.png'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){

    const tipo = type === 'Visa' ? visa : master 

    const cartao = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: bgColor,
        color: color,
        width: '300px',
        height: '150px',
        margin: '10px',
        borderRadius: '5px',
        padding: '10px'
        
    }

  

    const imagem = {
        width: '40px',
        alignSelf: 'flex-end'
    }

    const numero = {
        fontSize: '24px',
        color: color,
        padding: '20px'
    }

    const dados={
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
        
    }

    return (
        <div id="cartao" style={cartao}>
            <img src={tipo} alt="type" style={imagem}/>
            
            <div>
                <div style={numero}><p>**** **** **** {number.slice(-4)}</p></div>
                <div id="dados" style={dados}>
                    <p>Expires {expirationMonth}/{expirationYear}    {bank}   </p>
                    <p>{owner}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard