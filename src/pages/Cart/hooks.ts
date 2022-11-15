import { Cart } from '../../api/types';

export const totalAmount = (cart: Cart[]) => {
  const total = cart.reduce(function (res, item) {
    return res + item.price * item.quantity;
  }, 0);

  return total;
};
