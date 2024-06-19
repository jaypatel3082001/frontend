import { Link } from "react-router-dom";

function Addquestion() {
  return (
    <div className="flex items-center">
      <div className="font-bold">Add Question :- </div>
      <Link to="/questionadd">
        <button className="bg-gray-300 w-fit ml-2" type="submit">
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
  );
}

export default Addquestion;
