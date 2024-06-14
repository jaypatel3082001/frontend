import { configureStore } from '@reduxjs/toolkit';
// import inputReducer from './slice'; // Adjust path if necessary
import inputReducer from './reduxfiles/InputSlice';

const store = configureStore({
  reducer: {
    inputs: inputReducer,

  },
});

export default store;
