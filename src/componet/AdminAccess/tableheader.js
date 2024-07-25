import React from "react";
import { ReactComponent as Sortbyname } from "../../svgfile/sortbyname.svg";
import { setCurrentPage } from "../../reduxfiles/Admin";
import { useDispatch } from "react-redux";

function Tableheader({ sortOrder, setSortOrder, setRole, role }) {
  const dispatch = useDispatch();

  const handleSorting = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
    setRole("");
    dispatch(setCurrentPage(1));
  };
  const handleRoleSorting = () => {
    setRole((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
    setSortOrder("");
    dispatch(setCurrentPage(1));
  };

  return (
    <thead>
      <tr className="bg-[#8A6FDF]  text-white uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">NUMBER</th>
        <th className="py-3 px-6 text-left">
          {" "}
          <div className="flex  cursor-pointer" onClick={handleSorting}>
            <div> Name</div>
            <div className="ml-2">
              <Sortbyname
                fill="white"
                className={sortOrder === "asc" ? "rotate-180" : ""}
              />
            </div>
          </div>
        </th>

        <th className="py-3 px-6 text-left">Email</th>
        <th className="py-3 px-6 text-left">Date</th>
        <th className="py-3 px-6 text-left">
          {" "}
          <div className="flex  cursor-pointer" onClick={handleRoleSorting}>
            <div> Role</div>
            <div className="ml-2">
              <Sortbyname
                fill="white"
                className={role === "asc" ? "rotate-180" : ""}
              />
            </div>
          </div>
        </th>
        <th className="py-3 px-6 ">ACTION</th>
      </tr>
    </thead>
  );
}

export default Tableheader;
