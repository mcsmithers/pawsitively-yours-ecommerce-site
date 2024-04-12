// Application level states defined here and defining actions to make state changes

export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) => {
    return (basket?.reduce((amount, item) => item.price + amount, 0));
}

// Selector
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        default:
            return state;
    }

}

export default reducer;