import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS, API } from '../helpers/consts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const productContext = createContext()
export const useProducts = () => useContext(productContext)

const INIT_STATE = {
    products: [],
    oneProduct: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type){
        case ACTIONS.GET_PRODUCTS:
            return {...state, products: action.payload}
        case ACTIONS.GET_ONE_PRODUCT:
            return {...state, oneProduct: action.payload}
        default:
            return state    
    }
}

const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const navigate = useNavigate()
    const addProduct = async (newProduct) =>{
        await axios.post(API, newProduct)
    }
    const getProducts = async() => {
        const result = await axios.get(API)
        dispatch({type: ACTIONS.GET_PRODUCTS, payload: result.data})
    }
    const deleteProduct = async(id) =>{
        await axios.delete(`${API}/${id}`)
        getProducts()
    }
    const getOneProduct = async(id) => {
        const result = await axios.get(`${API}/${id}`)
        dispatch({type: ACTIONS.GET_ONE_PRODUCT, payload: result.data})
    }
    const saveChanges = async(id, editedProduct) => {
        await axios.patch(`${API}/${id}`, editedProduct)
        navigate('/products')
    }
    const values = {
        addProduct,
        getProducts,
        products: state.products,
        deleteProduct,
        oneProduct: state.oneProduct,
        getOneProduct,
        saveChanges
    }
    
    return (
        <productContext.Provider value={values}>{children}</productContext.Provider>
    );
};

export default ProductContextProvider;