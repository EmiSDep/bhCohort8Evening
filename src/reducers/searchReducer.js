const INITIAL_STORE = {
    list: [],
    query: "",
    loading: false,
    errors: {}
}

export default (store = INITIAL_STORE, action) => {
    switch (action.type) {
        default:
            return store;
    }
}