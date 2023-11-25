import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AddOnState = {
  value: string[];
};

const initialState: AddOnState = {
  value: [],
};

export const addOnSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    updateAddons: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload;
    },
  },
});

export const { updateAddons } = addOnSlice.actions;
export default addOnSlice.reducer;
