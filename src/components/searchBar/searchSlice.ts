import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: "",
};


export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
     
      state.query = action.payload;
    },
  },
});

export const { change } = searchSlice.actions;

export const selectQuery = (state: RootState) => state.search.query;


export default searchSlice.reducer;
