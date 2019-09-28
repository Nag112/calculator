const init_state = {
    output:"",
    input:"",
    numStack:[],
    symStack:[]
}
const outReducer=(state=init_state,action)=>
{
    switch(action.type)
    {
        case 'update':{
            let temp = ""
                return {...state,
                     output:state.output+action.payload,
                     input:state.input+action.payload
                    }}
        case 'push':
            {
                state.numStack.push(state.input)
                return { ...state,
                        input:""                    
                }
            }            
        default :
            return state
    }
}

export default outReducer;