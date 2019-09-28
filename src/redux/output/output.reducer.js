
const init_state = {
  output: "",
  input: "",
  numStack: []
};

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
        if(state.output!=="")                       
        { 
            state.numStack.push(state.input);            
            let result= 'ans';            
           while(state.numStack.length>1)
           {                 
                if(state.numStack.length<=1)
                {
                    result=state.numStack.pop();
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
                            result = parseInt(var1)+parseInt(var2);
                            state.numStack.unshift(result);
                            break;
                        case "-":
                            result = var1-var2;
                            state.numStack.unshift(result);
                            break;
                        case "X":
                            result = parseInt(var1)*parseInt(var2);
                            state.numStack.unshift(result);
                            break;        
                        case "/":
                            result = parseInt(var1)/parseInt(var2);
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
    default:
      return state;
  }
};

export default outReducer;
