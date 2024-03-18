import React from 'react';
import AppContext from '../context';

export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => {
    // Удаляем пробелы и символ "p" из цены, затем преобразуем в число
    const price = parseFloat(obj.price.replace(/\s|p/g, ''));
    return price + sum;
  }, 0);
  return { cartItems, setCartItems, totalPrice };
};
