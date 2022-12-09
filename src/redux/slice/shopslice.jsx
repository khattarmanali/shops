import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shops: [],
  status: "idle",
  error: null,
};

const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    shopAdded(state, action) {
      state.shops.push(action.payload);
    },
    shopUpdated(state, action) {
      const { id, name, area, category, openingDate, closingDate } =
        action.payload;
      const existingShop = state.shops.find((shop) => shop.id === id);
      if (existingShop) {
        existingShop.name = name;
        existingShop.area = area;
        existingShop.category = category;
        existingShop.openingDate = openingDate;
        existingShop.closingDate = closingDate;
      }
    },
    shopDeleted(state, action) {
      const { id } = action.payload;
      const existingShop = state.shops.find((shop) => shop.id === id);
      if (existingShop) {
        state.shops = state.shops.filter((shop) => shop.id !== id);
      }
    },
  },
});

export const { shopAdded, shopUpdated, shopDeleted } = shopsSlice.actions;

export default shopsSlice.reducer;
