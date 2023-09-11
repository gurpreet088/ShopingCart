import { createSlice, current } from "@reduxjs/toolkit";
import { shopItemsData as data } from "../../components/data/itemData";

const cartSlice = createSlice({
  name: "post",
  initialState: {
    items: data,
    totalAmount: 0,
    totalCount: 0,
  },
  // TODO: total count and total amount is not updating properly
  // TODO: to improve UI part
  // TODO: stay hopeful!! :)

  reducers: {
    getCartTotal: (state, action) => {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    remove: (state, action) => {
      let updatedItems = current(state).items.map((item) => {
        if (item.id === action.payload && item.amount > 0) {
          return { ...item, amount: 0 };
        }
        return item;
      });
      state.items = updatedItems;
    },
    increment: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrement: (state, action) => {
      let updatedItems = current(state).items.map((item) => {
        if (item.id === action.payload && item.amount > 0) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      state.items = updatedItems;
    },
    clearCart: (state, action) => {
      state.items = data;
    },
    getCartItems: (state) => {
      state.items = data;
    },
  },
});

export const {
  getCartTotal,
  remove,
  increment,
  decrement,
  clearCart,
  getCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
