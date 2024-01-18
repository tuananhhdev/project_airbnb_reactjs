import { getEntireRoomList } from "../../service/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEntireRoomsAction = createAsyncThunk(
  "fetch/entire",
  async (page, { dispatch }) => {
    dispatch(changeIsLoadingAction(true));
    dispatch(changeCurrentPageAction(page));
    const res = await getEntireRoomList(page);
    dispatch(changeRoomListAction(res.list));
    dispatch(changeTotalCountAction(res.totalCount));
    dispatch(changeIsLoadingAction(false));
  }
);

const entireReducer = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: false,
  },
  reducers: {
    changeRoomListAction(state, action) {
      state.roomList = action.payload;
    },
    changeCurrentPageAction(state, action) {
      state.currentPage = action.payload;
    },
    changeTotalCountAction(state, action) {
      state.totalCount = action.payload;
    },
    changeIsLoadingAction(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  changeRoomListAction,
  changeCurrentPageAction,
  changeTotalCountAction,
  changeIsLoadingAction,
} = entireReducer.actions;

export default entireReducer.reducer;
