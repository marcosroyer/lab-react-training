

function Rating({children}){
    const cheia = '★'
    const vazia = '☆'
   
    function retornaEstrelas(){
        const qtd = Math.round(children)
        console.log(qtd)
        return cheia.repeat(qtd) + vazia.repeat(5 - qtd)
    }

    return (
        <div> 
            {retornaEstrelas()}

        </div>
    )
}

export default Rating

