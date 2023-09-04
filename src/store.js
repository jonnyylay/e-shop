import { createStore } from 'redux';

// Define initial state
const initialState = {
    data: [] // Initialize the global state as an empty array
};

// Define reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItem = state.data.find(item => item.title === action.payload.title);
            if (existingItem) {
                return {
                    ...state,
                    data: state.data.map(item => {
                        if (item.title === action.payload.title) {
                            return {
                                ...item,
                                quantity: item.quantity + 1 // Increase the quantity by 1
                            };
                        }
                        return item;
                    })
                };
            } else {
                return {
                    ...state,
                    data: [...state.data, action.payload] // Add new item to the array
                };
            }
        case 'RESET_ARRAY':
            return {
                ...state,
                data: [] // Set the data array to an empty array
            };

        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(reducer);

export default store;