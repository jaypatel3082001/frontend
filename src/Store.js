import { configureStore } from "@reduxjs/toolkit";
// import inputReducer from './slice'; // Adjust path if necessary
import inputReducer from "./Slices/inputredux";
import inputReducer2 from "./Slices/sectionredux";
import inputReducer3 from "./Slices/quizredux";
import inputReducer4 from "./Slices/result";
import inputReducer5 from "./Slices/resultstudentSlice";
import inputReducer6 from "./Slices/Admin";

const store = configureStore({
  reducer: {
    inputs: inputReducer,
    inputs2: inputReducer2,
    inputs3: inputReducer3,
    inputs4: inputReducer4,
    inputs5: inputReducer5,
    inputs6: inputReducer6,
  },
});

export default store;
