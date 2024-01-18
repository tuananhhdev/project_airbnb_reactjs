import { createSlice } from "@reduxjs/toolkit";

const mainReducer = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: true,
    },
  },
  reducers: {
    changeHeaderConfigAction(state, action) {
      state.headerConfig = action.payload;
    },
  },
});

export const { changeHeaderConfigAction } = mainReducer.actions;

export default mainReducer.reducer;
