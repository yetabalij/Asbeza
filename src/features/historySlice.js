import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historyItems: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, actions) => {
      return {
        ...state,
        historyItems: [...state.historyItems, actions.payload],
      };
    },
  },
});

export const { addHistory } = historySlice.actions;
export default historySlice.reducer;
