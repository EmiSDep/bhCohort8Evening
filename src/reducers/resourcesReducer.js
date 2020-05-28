const INITIAL_STATE = {
    list: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "pushtolist":
            return {
                list: [...state.list, action.payload],
            };
        default:
        return state;
    }
};