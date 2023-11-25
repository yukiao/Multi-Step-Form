import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./features/personalInfo/personalInfo.slice";
import planReducer from "./features/plan/plan.slice";
import addOnReducer from "./features/addons/addons.slice";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    plan: planReducer,
    addOn: addOnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
