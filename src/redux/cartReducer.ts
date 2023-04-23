const ADD_ITEM = "ADD_ITEM";

const initialState = {
    itemsCount: 0,
    totalPrice: 0
}

const cartReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                itemsCount: state.itemsCount + 1,
                totalPrice: state.totalPrice + action.totalPrice
                }
        default:
            return state;
    }
}

export const addItem = ( totalPrice: number) => ({type: ADD_ITEM, totalPrice})

export default cartReducer;