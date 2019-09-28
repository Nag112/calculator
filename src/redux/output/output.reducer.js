
const init_state = {
  output: "",
  input: "",
  numStack: []
};

function cal(state)
{
    if(state.output!=="")                       
    { 
        state.numStack.push(state.input);            
        let result= 'ans';            
       while(state.numStack.length>0)
       {                 console.log(state.numStack.length)
            if(state.numStack.length<=2)
            {
                result=parseFloat(state.numStack.shift());
            }
            else
            {
                let var1=state.numStack.shift();
            let sym = state.numStack.shift();
            let var2 = state.numStack.shift();   
            console.log(var1+sym+var2)     
                switch(sym)
                {
                    case "+":
                        result = parseFloat(var1)+parseFloat(var2);
                        state.numStack.unshift(result);
                        break;
                    case "-":
                        result = var1-var2;
                        state.numStack.unshift(result);
                        break;
                    case "X":
                        result = parseFloat(var1)*parseFloat(var2);
                        state.numStack.unshift(result);
                        break;        
                    case "/":
                        result = parseFloat(var1)/parseFloat(var2);
                        state.numStack.unshift(result);
                        break;                        
                    default:
                        break;
                }
            }
        } 
        return {...state,numStack:[],output:result,input:result}
    }           
    else return {...state,numStack:[]}
}

const outReducer = (state = init_state, action) => {
  switch (action.type) {
    case "update": {
      if (action.payload === "C") return {...init_state,numStack:[]};
      else
        return {
          ...state,
          output: state.output + action.payload,
          input: state.input + action.payload
        };
    }
    case "push": {
      if(state.output !== "") 
      {
        if(state.input !== "") 
        {
          state.numStack.push(state.input);
          console.log("stack",state.numStack);
          console.log("input",state.input)
          state.numStack.push(action.payload);
          return { ...state,output: state.output + action.payload, input: "" };
        } 
        else 
        {
          state.numStack.push("0");
          state.numStack.push(action.payload);
          return { ...state,output: state.output+'0'+ action.payload, input: "" };
        }
      }
      else
      {
        state.numStack.push("0");
        state.numStack.push(action.payload);
        return { ...state, output: "0" + action.payload, input: "" };
      }
    }
    case 'result':
        {            
           return cal(state);
        }
        case 'flip':
                {        let temp = cal(state); 
                    if(temp.output!=="")                                
                        {
                            temp.output=-1*parseFloat(temp.output)
                        temp.input=-1*parseFloat(temp.input)  }                                      
                        return {...temp};
                }
              case 'sq':
                  {
                    let temp = cal(state);
                    if(temp.output!=="")                                
                    {
                        temp.output=-1*parseFloat(temp.output)
                        temp.input=-1*parseFloat(temp.input) 
                     }  
                     return {...temp};
                  }
              case 'sqrt':
                  {
                    let temp = cal(state);
                    if(temp.output!=="")                                
                    {
                        temp.output=-1*parseFloat(temp.output)
                         temp.input=-1*parseFloat(temp.input)  
                        }  
                     return {...temp};
                  }     
    default:
      return state;
  }
};

export default outReducer;
