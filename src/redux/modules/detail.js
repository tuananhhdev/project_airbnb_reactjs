import { createSlice } from "@reduxjs/toolkit";
const detailReducer = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {},
  },
  reducers: {
    changeDetailInfoAction(state, action) {
      state.detailInfo = action.payload;
    },
  },
});

export const { changeDetailInfoAction } = detailReducer.actions;

export default detailReducer.reducer;
