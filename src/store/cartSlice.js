import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resId: "",
  restaurantName: "",
  resImage: "",
  items: [],
  orderTotal: 0,
};

const calculateOrderTotal = (items) => {
  const subtotal = items.reduce((acc, item) => {
    const price = item.item.card.info.price || item.item.card.info.defaultPrice;
    return acc + (price * item.quantity) / 100;
  }, 0);
  const deliveryFee = 20;
  const total = subtotal + deliveryFee;
  return parseFloat(total.toFixed(2));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { restaurant, item } = action.payload;

      state.resId = restaurant.id;
      state.restaurantName = restaurant.name;
      state.resImage = restaurant.cloudinaryImageId;
      const existingItemIndex = state.items.findIndex(
        (cartItem) => cartItem.item.card.info.id === item.card.info.id
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ item, quantity: 1 });
      }
      state.orderTotal = calculateOrderTotal(state.items);
    },

    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(
        (cartItem) => cartItem.item.card.info.id === itemId
      );
      if (item) {
        item.quantity += 1;
      }

      state.orderTotal = calculateOrderTotal(state.items);
    },

    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(
        (cartItem) => cartItem.item.card.info.id === itemId
      );
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter(
            (cartItem) => cartItem.item.card.info.id !== itemId
          );
        }
      }
      if (state.items.length === 0) {
        Object.assign(state, initialState);
      } else {
        state.orderTotal = calculateOrderTotal(state.items);
      }
    },

    clearCart: () => initialState,
  },
});

export const { addItem, clearCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
