// import { createSlice } from "@reduxjs/toolkit";

// const InputSlice = createSlice({
//   name: "inputs",
//   initialState: {
//     userId: "",
//     sectionId: "",
//     role: "",
//   },
//   reducers: {
//     setUserid: (state, action) => {
//       state.userId = action.payload;
//     },
//     setSectionid: (state, action) => {
//       state.sectionId = action.payload;
//     },
//     setRole: (state, action) => {
//       state.role = action.payload;
//     },
//   },
// });

// export const { userId, setSectionid, setRole } = InputSlice.actions;
// export default InputSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  openpop: false,
  fadeTransition: { in: false, down: false },
};

// Create a loader slice
const InputSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.openpop = action.payload;
    },

    // openModal: (state, action) => {
    //   state[action.payload] = true;
    // },

    // closeModal: (state, action) => {
    //   state[action.payload] = false;
    // },

    // setFadeTransition: (state, action) => {
    //   state.fadeTransition = action.payload;
    // },

    // AllModalClose: (state, action) => {
    //   return {
    //     ...initialState,
    //     fadeTransition: {
    //       in: false,
    //       down: true,
    //     },
    //   };
    // },
  },
});

// Export actions
export const {
  toggleModal,
  openModal,
  closeModal,
  setFadeTransition,
  AllModalClose,
} = InputSlice.actions;

// Export reducer
export default InputSlice.reducer;
