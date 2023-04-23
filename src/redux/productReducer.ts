import axios from "axios";
import { Dispatch, AnyAction } from 'redux';
import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";

interface postItemObject  {
    title: string;
    description: string,
    price: number,
    quantity: number,
    media: File | null
}

interface putItemObject extends postItemObject {
    id: string
}

type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

const SET_PRODUCTS = "SET_PRODUCT";
const TOGGLE_ADMIN = "TOGGLE_ADMIN";
const ADD_DATA_ITEM = "ADD_DATA_ITEM";
const DELETE_DATA_ITEM = "DELETE_DATA_ITEM";
const UPDATE_DATA_ITEM = "UPDATE_DATA_ITEM";

const fetchData = async () => {
    const response = await axios.get(`https://6442423933997d3ef90bc8cb.mockapi.io/api/base`);
    return response;
}

const postItem = async (params:postItemObject) => {
    const {title, description = 'description', price, quantity, media} = params;
    const response = await axios.post(`https://6442423933997d3ef90bc8cb.mockapi.io/api/base`, {title, description, price, quantity, media});
    return response;
}

const deleteItem = async (id: string) => {
    const response = await axios.delete(`https://6442423933997d3ef90bc8cb.mockapi.io/api/base/${id}`);
    return response;
}

const putItem = async (params: putItemObject) => {
    const {id, title, description, price, quantity, media} = params;
    const response = await axios.put(`https://6442423933997d3ef90bc8cb.mockapi.io/api/base/${id}`, {title, description, price, quantity, media});
    return response;
}

const initialState = {
    items:[],
    limit: 4,
    isFetching: false,
    isAdmin: false,
    isUpdate: false
}

const productReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state, items: action.products, isFetching: true
            };
        case TOGGLE_ADMIN:
            return {
                ...state, isAdmin: action.isAdmin
            };
        case ADD_DATA_ITEM:
            return {
                ...state, items: state.items.concat(action.items), isUpdate: !state.isUpdate
            };
        case DELETE_DATA_ITEM:
            const updatedItems = state.items.filter((item: {id: number}) => item.id !== action.id);
            return {
                ...state, items: updatedItems, isUpdate: !state.isUpdate
            };
        case UPDATE_DATA_ITEM:
            return {
                ...state, items: state.items.concat(action.params), isUpdate: !state.isUpdate
            };
        default:
            return state;
    }
}

const setProducts = (products: putItemObject[]) => ({type: SET_PRODUCTS, products});
export const toggleAdmin = (isAdmin: boolean) => ({type: TOGGLE_ADMIN, isAdmin});
const addItem = (items: postItemObject[]) => ({type: ADD_DATA_ITEM, items});
const removeItem = (id: string) => ({type: DELETE_DATA_ITEM, id});
const updateItem = (params: putItemObject[]) => ({type: UPDATE_DATA_ITEM, params});

export const getData = (): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetchData();
            dispatch(setProducts(response.data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const addDataItem = (params: postItemObject): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await postItem(params);
            dispatch(addItem(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteDataItem = (id: string): AppThunk => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await deleteItem(id);
            dispatch(removeItem(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateDataItem = (params: putItemObject): AppThunk => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await putItem(params);
            dispatch(updateItem(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export default productReducer;