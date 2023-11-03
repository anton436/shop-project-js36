//функция для получения данных из хранилищя под ключем cart
export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};
//функция для подсчетов суммы всех товаров
export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => (acc += curr.subPrice), 0);
  return totalPrice;
};
//функция для подсчета стоимости за одну позицию
export const calcSubPrice = (product) => {
  return +product.item.price * product.count;
};
