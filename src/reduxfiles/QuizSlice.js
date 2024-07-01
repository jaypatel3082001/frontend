import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openpop: false,
  dateRange: [
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ],
  Tablemanuplation: {
    isLoading: false,

    data: [],
    sortedData: [],
    totalPage: 0,
    currentPage: 1,
    totalCount: 0,

    // offset,
    display: false,
    idstore: null,
    idstores: null,

    // calendarRef,
  },
  fadeTransition: { in: false, down: false },
};
const InputSlice2 = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.openpop = action.payload;
    },
    setDateRangequize: (state, action) => {
      return {
        ...state,
        dateRange: action.payload,
      };
    },
    setIsloading: (state, action) => {
      state.Tablemanuplation.isLoading = action.payload;
    },
    setData: (state, action) => {
      state.Tablemanuplation.data = action.payload;
    },
    setSortedData: (state, action) => {
      state.Tablemanuplation.sortedData = action.payload;
    },
    setTotalPage: (state, action) => {
      state.Tablemanuplation.totalPage = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.Tablemanuplation.currentPage = action.payload;
    },
    setIdstore: (state, action) => {
      state.Tablemanuplation.idstore = action.payload;
    },
    setIdstores: (state, action) => {
      state.Tablemanuplation.idstores = action.payload;
    },
    setDisplay: (state, action) => {
      state.Tablemanuplation.display = action.payload;
    },
    setTotalCount: (state, action) => {
      state.Tablemanuplation.totalCount = action.payload;
    },
  },
});

// Export actions
export const {
  toggleModal,
  openModal,
  setTotalCount,
  closeModal,
  setFadeTransition,
  AllModalClose,
  setDateRangequize,
  setData,
  setIdstores,
  setIsloading,
  setIdstore,
  setCurrentPage,
  setTotalPage,
  setSortedData,
  setDisplay,
} = InputSlice2.actions;

// Export reducer
export default InputSlice2.reducer;
