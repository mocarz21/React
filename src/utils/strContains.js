


const strContains =(one, two)=>{  
    console.log(one,two)
    
    if(one.toLowerCase().includes(two.toLowerCase()))
        return(
            true
        )
    else return(
        false
    )

}

export default strContains;