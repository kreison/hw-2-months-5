export const reducer =  (state = { users: []}, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return { ...state, users: action.payload };
        case 'FILTER_POSTS':
            return {...state, users: [action.payload]}
        default:
            return state;
    };
};