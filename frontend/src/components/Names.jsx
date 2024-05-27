const Names = (data) => {
    console.log({data} ,"IN names")
    return data.map(({name}) => <p>{name}</p>)
}

export default  Names