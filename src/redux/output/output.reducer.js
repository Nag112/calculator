import { isSymbol } from "util";

const init_state = {
  output: "",
  input: "",
  numStack: [],
  symStack: []
};

const outReducer = (state = init_state, action) => {
  switch (action.type) {
    case "update": {
      if (action.payload === "C") return init_state;
      else
        return {
          ...state,
          output: state.output + action.payload,
          input: state.input + action.payload
        };
    }
    case "push": {
      if (state.output !== "") 
      {
        if (state.input !== "") 
        {
          state.numStack.push(state.input);
          state.numStack.push(action.payload);
          return { ...state, output: state.output + action.payload, input: "" };
        } 
        else 
        {
          state.numStack.push("0");
          state.numStack.push(action.payload);
          return { ...state, output: state.output+'0'+ action.payload, input: "" };
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
            return {init_state,output:"answer"}
        }
    default:
      return state;
  }
};

export default outReducer;
