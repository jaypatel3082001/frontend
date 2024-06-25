import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import style from "./CustomDatePicker.module.scss";
// import { SlCalender } from "react-icons/sl";
import { FaCalendarDays } from "react-icons/fa6";

import { useClickOutside } from "../../src/hooks/CustomHooks";
import { useDispatch, useSelector } from "react-redux";
import { setDateRange } from "../reduxfiles/InputSlice";

function CustomDatePicker({ onDateRangeChange }) {
  const inputs = useSelector((state) => state.inputs);
  const datepickerRef = useRef();
  const [showDatePicker, setShowDatePiceker] = useState(false);
  // const [dateRange, setDateRange] = useState([
  //   {
  //     startDate: null,
  //     endDate: null,
  //     key: "selection",
  //   },
  // ]);
  const dispatch = useDispatch();

  //call useClickOutside Hook
  useClickOutside(datepickerRef, () => {
    if (showDatePicker) {
      setShowDatePiceker(false);
    }
  });

  const handleDateRangeChange = (ranges) => {
    // Serialize the dates or other non-serializable data in ranges.selection
    const serializedSelection = {
      startDate: ranges.selection.startDate.toString(),
      endDate: ranges.selection.endDate.toString(),
      key: ranges.selection.key,
    };

    // Dispatch action with serialized payload
    dispatch(setDateRange([serializedSelection]));

    // Call onDateRangeChange callback if provided
    if (onDateRangeChange) {
      onDateRangeChange(serializedSelection);
    }
  };

  const handleToggleDatePicker = () => {
    setShowDatePiceker(!showDatePicker);
  };

  return (
    <div>
      <div onClick={handleToggleDatePicker}>
        <FaCalendarDays strokeWidth={2} stroke="#000" />
      </div>

      {showDatePicker && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-10">
          <div ref={datepickerRef}>
            <DateRangePicker
              ranges={inputs.dateRange}
              onChange={handleDateRangeChange}
              className={"style.CustomDatePicker,static top-1/2"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDatePicker;
