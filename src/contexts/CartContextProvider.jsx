import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS } from '../helpers/consts';
import { calcTotalPrice, getLocalStorage } from '../helpers/functions';

export const cartContext = createContext()
export const useCart = () => useContext(cartContext)

const INIT_STATE={
    cart: JSON.parse(localStorage.getItem('cart'))
}

const reducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.GET_CART:
            return {...state, cart: action.payload}
    
        default:
            return state
    }
}

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    //функция для получения продуктов добавленных в корзину из хранилища
    const getCart = () => {
        // получаем данные из localStorage
        let cart = getLocalStorage()
        // проверка на наличие данных под ключом cart в localStorage
        if(!cart){
            // перемещаем данные в случае если в cart лежит null
            localStorage.setItem('cart', JSON.stringify({
                products:[], 
                totalPrice: 0,
            }))
            // перезаписываем переменнную cart c null на объект
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        // обновляем состояние
        dispatch({type: ACTIONS.GET_CART, payload: cart})
    }
    // функция для добавления товара в корзину
    const addProductToCart = (product) => {
        // получаем содержимое из хранилища под ключом cart
        let cart = getLocalStorage()
        // проверка на существование данных в хранилище под ключом cart
        if(!cart) {
            cart = {products: [], totalPrice: 0}
        }
        // создаем объект, который добавим в localStorage в массив cart.products
        let newProduct = {
            item: product,
            count: 1,
            subPrice: +product.price,
        }
        // проверяем есть ли уже продукт который хотим добавитб в корзину
        let productToFind = cart.products.filter((elem) => elem.item.id === product.id)
        // если товар уже добавлен в корзину, то удаляем его из массива cart.products через фильтр, в противном случае добавляем его в cart.products
        if(productToFind.length === 0){
            cart.products.push(newProduct)
        }else{
            cart.products = cart.products.filter(
                (elem) => elem.item.id !== product.id
            )
        }
        //  пересчитываем totalPrice
        cart.totalPrice = calcTotalPrice(cart.products)
        // обновляем данные в localstorage
        localStorage.setItem('cart', JSON.stringify(cart))
        //  обновляеи состояние
        dispatch({type:ACTIONS.GET_CART, payload: cart})
    }
    // функция для проверки на наличие товара в корзине
    const checkProductInCart = (id) => {
        let cart = getLocalStorage()
        if (cart){
            let newCart = cart.products.filter((elem)=> elem.item.id === id)
            return newCart.length > 0 ? true : false
        }
    }

    const values = {getCart, cart: state.cart, addProductToCart, checkProductInCart}
    return (
        <cartContext.Provider value={values}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;