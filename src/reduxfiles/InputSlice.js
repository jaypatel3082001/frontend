import { createSlice } from "@reduxjs/toolkit";

const InputSlice = createSlice({
  name: "inputs",
  initialState: {
    userId: "",
    sectionId: "",
    role: "",
  },
  reducers: {
    setUserid: (state, action) => {
      state.userId = action.payload;
    },
    setSectionid: (state, action) => {
      state.sectionId = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { userId, setSectionid, setRole } = InputSlice.actions;
export default InputSlice.reducer;
