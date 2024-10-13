const initState = {
    users: []
}

const UserReducer = (state = initState, action) => {
    switch(action.type) {
        case "LOAD_USERS":
            return { ...state, users: action.payload };
        default: return state;
    }
}

export default UserReducer;