import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import style from "./CustomDatePicker.module.scss";
import { SlCalender } from "react-icons/sl";
import { useClickOutside } from "../../src/hooks/CustomHooks";

function CustomDatePicker({ onDateRangeChange }) {
  const datepickerRef = useRef();
  const [showDatePicker, setShowDatePiceker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  //call useClickOutside Hook
  useClickOutside(datepickerRef, () => {
    if (showDatePicker) {
      setShowDatePiceker(false);
    }
  });

  const handleDateRangeChange = (ranges) => {
    setDateRange([ranges.selection]);
    if (onDateRangeChange) {
      onDateRangeChange(ranges.selection);
    }
  };

  const handleToggleDatePicker = () => {
    setShowDatePiceker(!showDatePicker);
  };

  return (
    <div className="position-relative" ref={datepickerRef}>
      <div className={style.CalenderIcon} onClick={handleToggleDatePicker}>
        <SlCalender />
      </div>
      {showDatePicker && (
        <DateRangePicker
          ranges={dateRange}
          onChange={handleDateRangeChange}
          className={style.CustomDatePicker}
        />
      )}
    </div>
  );
}

export default CustomDatePicker;
