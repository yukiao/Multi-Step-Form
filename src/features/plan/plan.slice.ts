import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PlanState = {
  selectedPlan: number;
  yearlySubscription: boolean;
};

const initialState: PlanState = {
  selectedPlan: -1,
  yearlySubscription: false,
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    updatePlan: (state, action: PayloadAction<number>) => {
      state.selectedPlan = action.payload;
    },
    updateIsYearySubscription: (state, action: PayloadAction<boolean>) => {
      state.yearlySubscription = action.payload;
    },
  },
});

export const { updatePlan, updateIsYearySubscription } = planSlice.actions;
export default planSlice.reducer;
