import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { setIsloading } from "../../../reduxfiles/QuizSlice";
function Keyshow() {
  const id = localStorage.getItem("keyQuizeId");
  const api = `https://quiz-krishang.vercel.app/key/generatekey`;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredData = useMemo(
    () =>
      inputs.Tablemanuplation.keydata?.filter(
        (info) => inputs.Tablemanuplation.idkeystores === info._id
      ),
    [inputs.Tablemanuplation.keydata, inputs.Tablemanuplation.idkeystores]
  );

  return (
    <div>
      {filteredData.map((info) => (
        <div
          key={info._id}
          className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-100"
        >
          <div>{info.key}</div>
        </div>
      ))}
    </div>
  );
}

export default Keyshow;
