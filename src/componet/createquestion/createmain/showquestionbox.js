import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, setIsloading } from "../../../Slices/inputredux";
import { questionpopbox } from "../../../services/get";
import { ReactComponent as Close } from "../../../svgfile/close.svg";

function Showquestionbox({ showQuestion }) {
  const inputs = useSelector((state) => state.inputs);
  const dispatch = useDispatch();
  console.log("first", inputs.Tablemanuplation.idstores);
  console.log(inputs.openpop);
  const fetchData = useCallback(async () => {
    try {
      dispatch(setIsloading(true));
      console.log("response");
      const response = await questionpopbox(inputs.Tablemanuplation.idstores);
      console.log(response);
      dispatch(setData(response.data));
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      dispatch(setIsloading(false));
    }
  }, [dispatch]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredData = useMemo(() => {
    return inputs.Tablemanuplation?.data?.filter(
      (info) => inputs.Tablemanuplation.idstores === info._id
    );
  }, [inputs.Tablemanuplation.data, inputs.Tablemanuplation.idstores]);

  return (
    <div>
      {filteredData.map(
        (info) =>
          inputs.openpop === true && (
            <div
              key={info._id}
              className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-100"
            >
              <div className="bg-white w-3/4 md:w-1/2 xl:w-1/3 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between">
                  <div className="font-bold text-xl">
                    Mark: {info.weightage}
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => showQuestion(info._id)}
                  >
                    <Close />
                  </div>
                </div>
                <div className="font-bold text-xl mb-4 mt-4 text-left">
                  <span className="break-words">{info.question}</span>
                </div>
                <div className="mb-4">
                  <label className="flex items-end mb-2">
                    <span className="font-extrabold">Option1 :-</span>
                    <span className="text-xl ml-2">{info.option1}</span>
                  </label>
                  <label className="flex items-end mb-2">
                    <span className="font-extrabold">Option2 :-</span>
                    <span className="text-xl ml-2">{info.option2}</span>
                  </label>
                  <label className="flex items-end mb-2">
                    <span className="font-extrabold">Option3 :-</span>
                    <span className="text-xl ml-2">{info.option3}</span>
                  </label>
                  <label className="flex items-end mb-2">
                    <span className="font-extrabold">Option4 :-</span>
                    <span className="text-xl ml-2">{info.option4}</span>
                  </label>
                </div>
                <div className="border-t text-left pt-4">
                  <span className="text-xl">Answer: {info.answer}</span>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Showquestionbox;
