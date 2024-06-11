import { Link } from "react-router-dom";

function Addquestion() {
  return (
    <div className="flex justify-between mt-5">
      <div></div>
      <div className=" flex items-center flex-col p-2  bg-blue-300">
        <div>Add Question</div>
        <Link to="/questionadd">
          <button className="bg-red-300 w-fit mt-1" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="25px"
              width="25px"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Addquestion;
