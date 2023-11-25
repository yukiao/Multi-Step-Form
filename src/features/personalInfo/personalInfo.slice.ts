import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PersonalInfoState = {
  name: string;
  email: string;
  phone: string;
};

const initialState: PersonalInfoState = {
  name: "",
  phone: "",
  email: "",
};

export const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPersonalInfo: (_state, action: PayloadAction<PersonalInfoState>) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setEmail, setPhoneNumber, setName, setPersonalInfo } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
