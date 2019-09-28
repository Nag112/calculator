export const setOutput =digit=> ({
    type:'update',
    payload:digit
})

export const pushOutput = sym=>({
    type:'push',
    payload:sym
})