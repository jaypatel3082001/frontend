import React, { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddSection from "../addsection";
import { Link } from "react-router-dom";
import { setIsloading, setData } from "../../../reduxfiles/sectionredux";
import { sectiontoquestionread } from "../../../services/get";
import { sectiontoquestiondelete } from "../../../services/delete";
import { ReactComponent as Delete } from "../../../svgfile/delete.svg";
import { ReactComponent as CloseButton } from "../../../svgfile/close.svg";

function Showquestionbox({ showQuestion }) {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.inputs2);
  const id2 = localStorage.getItem("ShowsectionId");

  const fetchData = useCallback(async () => {
    try {
      dispatch(setIsloading(true));
      const response = await sectiontoquestionread();
      dispatch(setData(response.data.data));
    } catch (error) {
      console.error("Fetch operation error:", error);
    } finally {
      dispatch(setIsloading(false));
    }
  }, [dispatch]);

  const handleDelete = useCallback(
    async (id1) => {
      const updatedDel = { questionId: id1 };

      try {
        const response = await sectiontoquestiondelete(id2, updatedDel);
        fetchData();
      } catch (error) {
        console.error("Fetch operation error:", error);
      }
    },
    [id2, fetchData]
  );

  if (inputs?.openpop === true) {
    fetchData(); // Update data state
  }

  return (
    <div>
      {inputs.Tablemanuplation.data?.map(
        (info) =>
          inputs.Tablemanuplation.idstores === info._id &&
          inputs?.openpop === true && (
            <div
              key={info._id}
              className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-100 py-12 "
            >
              <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden h-full ">
                <div className="bg-gray-800 text-white py-3 px-4 flex justify-between items-center">
                  <div>
                    <Link
                      to={`/admin/Sectionmain/question-list/question-select`}
                    >
                      <button
                        type="submit"
                        className="btn bg-[#8A6FDF]   mr-3 flex items-center"
                      >
                        <AddSection />
                      </button>
                    </Link>
                  </div>
                  <div className="text-xl font-bold">{info.sectionname}</div>
                  <div
                    className="cursor-pointer flex items-center"
                    onClick={() => showQuestion(info._id)}
                  >
                    <CloseButton fill="white" />
                  </div>
                </div>
                <div className="p-6 overflow-y-scroll h-full">
                  {info.sectionmcqs?.map((index) => (
                    <div key={index._id} className="mb-6">
                      <div>
                        <div className="flex justify-between items-center">
                          <div className="font-bold text-xl mb-2 mt-4">
                            Q:
                            <span className="break-words ml-2">
                              {index.question}
                            </span>
                          </div>
                          <div className="flex justify-end">
                            <div
                              className="cursor-pointer ml-4"
                              onClick={() => handleDelete(index._id)}
                            >
                              <Delete />
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="flex items-end mb-2">
                            <span className="font-extrabold">Option 1:</span>
                            <span className="text-xl ml-2">
                              {index.option1}
                            </span>
                          </label>
                          <label className="flex items-end mb-2">
                            <span className="font-extrabold">Option 2:</span>
                            <span className="text-xl ml-2">
                              {index.option2}
                            </span>
                          </label>
                          <label className="flex items-end mb-2">
                            <span className="font-extrabold">Option 3:</span>
                            <span className="text-xl ml-2">
                              {index.option3}
                            </span>
                          </label>
                          <label className="flex items-end mb-2">
                            <span className="font-extrabold">Option 4:</span>
                            <span className="text-xl ml-2">
                              {index.option4}
                            </span>
                          </label>
                        </div>
                        <div className="border-b pb-4 text-left">
                          <span className="text-xl ">
                            Answer: {index.answer}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Showquestionbox;
