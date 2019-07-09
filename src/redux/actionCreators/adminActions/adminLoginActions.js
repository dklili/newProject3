export const storeInputValue = (name, value) => ({
    type: 'storeInputValue',
    name,
    value
})
export const handleLoginMessage = (value) => ({
    type: 'handleLoginMessage',
    value
})
export const handleLoginStatus = (value) => ({
    type: 'handleLoginStatus',
    value
})