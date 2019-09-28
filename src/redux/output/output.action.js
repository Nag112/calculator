export const setOutput =digit=> ({
    type:'update',
    payload:digit
})

export const pushOutput = sym=>({
    type:'push',
    payload:sym
})
export const displayResult = ()=>({
    type:'result',
    payload:''
})
export const sciMode = ()=>({
    type:'scimode',
    payload:''
})
export const flip = ()=>({
    type:'flip',
    payload:''
})
export const square = ()=>({
    type:'sq',
    payload:''
})
export const squareRoot = ()=>({
    type:'sqrt',
    payload:''
})