import { createStore } from "redux";

// Define the initial state
const initialState = {
  items: [],
};

// Define the reducer function
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const updatedItems = state.items.some((item) => item.id === action.payload.id)
        ? state.items.filter((item) => item.id !== action.payload.id)
        : [...state.items, action.payload];

      return {
        ...state,
        items: updatedItems,
      };

    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(basketReducer);

export default store;



