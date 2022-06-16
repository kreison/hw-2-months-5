export const reducer =  (state = { users: []}, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return { ...state, users: action.payload };
        default:
            return state;
    };
};