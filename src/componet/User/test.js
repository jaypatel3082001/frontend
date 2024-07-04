import React, { useEffect } from "react";

const Test = ({ onStayAway, onSubmit }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("keypress", handleKeyDown, true);
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg text-center">
        <h2 className="mb-4 text-xl font-bold">Key Pressed</h2>
        <button
          className="mx-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={onStayAway}
        >
          Stay Away
        </button>
        <button
          className="mx-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Test;
