import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '../../api/types';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: <Cart[]>[],
  },
  reducers: {
    // Ajout
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item: Cart) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    // Incrémentation
    // Décrementation
    // Suppression
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
