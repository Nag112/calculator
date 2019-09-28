import outReducer from '../output/output.reducer'

  const inReducer = (state={} , action) => {
      switch(action.type)
      {
        case 'flip':
            {     
                console.log(state)
                  //const result = outReducer(state,{type:'result',payload:''});                   
                  return {...state};
            }
          case 'sq':
              {
                  const result = outReducer(state,{type:'result',payload:''});
                  return state;
              }
          case 'sqrt':
              {
                  const result = outReducer(state,{type:'result',payload:''});
                  return state;
              }  
              default :
              return state;
      }
  }

  export default inReducer;