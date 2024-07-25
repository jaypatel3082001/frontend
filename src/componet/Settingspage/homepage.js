import React, { useEffect, useState } from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";
import { SketchPicker } from "react-color";

function Homepage() {
  const [background, setBackground] = useState("#FFFFFF");
  // const url = "https://quiz-krishang.vercel.app/key/fetchkey";
  // const [data, setData] = useState([]);
  const token = localStorage.getItem("authToken");

  const [inputlogindata, setInputlogindata] = useState("");

  const [files, setFiles] = useState({
    backgroundImage: null,
    logo: null,
  });

  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputlogindata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   setFiles((prev) => ({
  //     ...prev,
  //     [name]: files[0],
  //   }));
  // };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(url, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const result = await response.json();
  //     setData(result.data);
  //   } catch (error) {
  //     console.error("Fetch operation error:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handlefileSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("logo", files.logo);
    // formData.append("backgroundImage", files.backgroundImage);

    formData.append("backgroundColor", background);

    const api = "https://quiz-krishang.vercel.app/auth/ExamLoginpage";
    try {
      const response = await fetch(api, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
      }
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex items-center justify-center flex-grow p-5">
          <div className="bg-white w-full max-w-3xl md:max-w-2xl xl:max-w-xl p-6 rounded-lg shadow-lg">
            <form className="form-group mt-3" onSubmit={handlefileSubmit}>
              {/* <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Select Quiz:
                </label>
                <select
                  className="border border-gray-800 w-full mt-1 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                  name="key"
                  onChange={handleChange}
                >
                  <option value="">Select Quiz</option>
                  {data.map((index, ind) => (
                    <option key={ind} value={index.key}>
                      {index.quizId.quizName} --- {index.key}
                    </option>
                  ))}
                </select>
              </div> */}
              <label className="block text-sm font-medium text-gray-700">
                Background Color
              </label>
              <SketchPicker
                color={background}
                onChangeComplete={handleChangeComplete}
              />
              <input
                type="text"
                className="mt-1 sm:mt-0 w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-xl "
                onChange={handleChange}
                name="backgroundColor"
                value={background}
                required
              />

              <label className="block text-sm font-medium text-gray-700 mt-4">
                Background Image
              </label>
              {/* <input
                type="file"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="backgroundImage"
                onChange={handleFileChange}
              /> */}
              <label className="block text-sm font-medium text-gray-700 mt-4">
                Logo
              </label>
              {/* {/* <input
                type="file"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="logo"
                onChange={handleFileChange} 
              /> */}
              <button
                type="submit"
                className="w-full bg-[#8A6FDF] text-white py-2 px-4 mt-4 rounded-md hover:bg-green-600 transition duration-200"
              >
                UPLOAD
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
