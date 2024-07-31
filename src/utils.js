// for reuse the code  DRY(Dom Not Repeate Yourself)

export const dynamicHandler = (event , component)=>{
    return component.setState({
        [event.target.name]:event.target.value
    })
}