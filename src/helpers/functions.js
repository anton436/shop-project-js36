//функция, для  получения данных  из localStorage под ключом cart
export const getLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    return cart
}
//функция для подсчета всех товаров
export const calcTotalPrice = (products) => {
    const totalPrice = products.reduce((acc, curr)=> (acc += curr.subPrice), 0)
    return totalPrice
}
//функция для подсчета стоимости за одну позицию
export const calcSubPrice = (product) => {
    return +product.item.price * product.count;
}