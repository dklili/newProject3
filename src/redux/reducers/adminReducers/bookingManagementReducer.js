
const defaultState = {
    booking: [
        {
            id: 1,
            orderTime: "13:38:02",
            progress: 35,
            name: "Frank",
            phoneNumber: "0455555555",
            status: "Panding"
        },
        {
            id: 2,
            orderTime: "18:38:02",
            progress: 100,
            name: "Jason",
            phoneNumber: "0466666666",
            status: "Ready"
        },
        {
            id: 3,
            orderTime: "09:38:02",
            progress: 100,
            name: "Tracy",
            phoneNumber: "0477777777",
            status: "Finish"
        }
    ],
    test: 'Ready'

}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'statusChange':
            return { ...state, test: action.status }
        default:
            return state;
    }
}
