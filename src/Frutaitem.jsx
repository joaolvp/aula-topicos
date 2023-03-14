function FrutaItem({nome, quantidade, className}){
    return(
        <div className={className}>
            Fruta {nome} - quantidade: {quantidade}
        </div>

    )
}

export default FrutaItem