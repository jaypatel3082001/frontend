import { configureStore } from "@reduxjs/toolkit";
// import inputReducer from './slice'; // Adjust path if necessary
import inputReducer from "./reduxfiles/InputSlice";
import inputReducer2 from "./reduxfiles/quizeSlice";
import inputReducer3 from "./reduxfiles/sectionSlice";

const store = configureStore({
  reducer: {
    inputs: inputReducer,
    inputs2: inputReducer2,
    inputs3: inputReducer3,
  },
});

export default store;
