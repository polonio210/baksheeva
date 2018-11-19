const initialState = {
    firstName: '',
    surname: '',
    age: ''
};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EXAMPLE":
            return "hi";
        default:
            return state;
    }
}

export default exampleReducer;