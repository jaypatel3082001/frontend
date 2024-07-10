import React from "react";
import Sidebar from "../fixdata/sidebar";
import Navbar from "../fixdata/navbar";

function Main({ setIsLoggedIn }) {
  return (
    // <div className="App">
    //   <div className="flex">
    //     <Sidebar />
    //     {/* ----------navbar--------------------------- */}
    //     <div className="w-full bg-[#EEEEEE] ml-64">
    //       <div>
    //         <Navbar setIsLoggedIn={setIsLoggedIn} />
    //       </div>
    //       <div className="p-5">
    //         <div className="flex gap-4">
    //           {/* First box */}
    //           <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white rounded-lg shadow-md p-4">
    //             <p className="text-center text-gray-700">Total Question</p>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-red-300 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>

    //           {/* Second box */}
    //           <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white rounded-lg shadow-md p-4">
    //             <div className="text-center text-gray-700 font-semibold">
    //               Total Quiz
    //             </div>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-red-300 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>

    //           <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white rounded-lg shadow-md p-4">
    //             <p className="text-center text-gray-700">Total Section</p>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-red-300 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>
    //           <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white rounded-lg shadow-md p-4">
    //             <p className="text-center text-gray-700">Total Result</p>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-red-300 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="bg-white shadow-lg p-4 rounded-lg flex flex-col float-end mr-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mt-5">
    //         <div className="mb-4">
    //           <h2 className="text-lg font-semibold">Recent Exam</h2>
    //         </div>
    //         <div className="space-y-4">
    //           <div className="p-4 bg-gray-400 rounded-lg shadow">
    //             <div className="text-white font-bold">
    //               Name:- Sakariya Vinay
    //             </div>
    //             <div className="text-gray-300">Total Result: - 22</div>
    //             <div className="text-red-500 font-bold">Status: Fail</div>
    //           </div>
    //           <div className="p-4  bg-red-100 rounded-lg shadow">
    //             <div className="text-gray-700 font-medium">
    //               Name:- Sakariya Vinay
    //             </div>
    //             <div className="text-gray-500">Total Result: - 22</div>
    //             <div className="text-red-500">Status: Fail</div>
    //           </div>
    //           <div className="p-4  bg-red-100 rounded-lg shadow">
    //             <div className="text-gray-700 font-medium">
    //               Name:- Sakariya Vinay
    //             </div>
    //             <div className="text-gray-500">Total Result: - 22</div>
    //             <div className="text-red-500">Status: Fail</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="App">
    //   <div className="flex">
    //     <Sidebar />
    //     {/* ----------navbar--------------------------- */}
    //     <div className="w-full bg-blue-50 ml-64">
    //       <div>
    //         <Navbar setIsLoggedIn={setIsLoggedIn} />
    //       </div>
    //       <div className="p-5">
    //         <div className="flex flex-wrap gap-4">
    //           {/* First box */}
    //           <div className="flex-1 min-w-[240px] bg-white rounded-lg shadow-md p-4">
    //             <p className="text-center text-blue-700">Total Questions</p>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>

    //           {/* Second box */}
    //           <div className="flex-1 min-w-[240px] bg-white rounded-lg shadow-md p-4">
    //             <p className="text-center text-blue-700">Total Quiz</p>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>

    //           {/* Third box */}
    //           <div className="flex-1 min-w-[240px] bg-white rounded-lg shadow-md p-4">
    //             <p className="text-center text-blue-700">Total Sections</p>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-purple-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>

    //           {/* Fourth box */}
    //           <div className="flex-1 min-w-[240px] bg-white rounded-lg shadow-md p-4">
    //             <p className="text-center text-blue-700">Total Results</p>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-pink-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <div>
    //           <div>Top Student</div>

    //           <table>
    //             <tr>
    //               <th>Number</th>
    //               <th>Name</th>
    //               <th>Email-id</th>
    //               <th>Exam Name</th>
    //               <th>Total Marks</th>
    //             </tr>
    //             <tbody>
    //               <td>1</td>
    //               <td>vinay</td>
    //               <td>Vinay@gmail.com</td>
    //               <td>Backend Developer</td>
    //               <td>98/100</td>
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //       <div className="bg-gray-100 shadow-lg p-4 rounded-lg flex flex-col float-end mr-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mt-5 ">
    //         <div className="mb-4">
    //           <h2 className="text-lg font-semibold text-blue-700">
    //             Recent Exams
    //           </h2>
    //         </div>
    //         <div className="space-y-4">
    //           <div className="p-4 bg-teal-100 rounded-lg shadow">
    //             <div className="text-teal-700 font-medium">
    //               Name: Sakariya Vinay
    //             </div>
    //             <div className="text-teal-500">Total Result: 22</div>
    //             <div className="text-red-500">Status: Fail</div>
    //           </div>
    //           <div className="p-4 bg-teal-100 rounded-lg shadow">
    //             <div className="text-teal-700 font-medium">
    //               Name: Sakariya Vinay
    //             </div>
    //             <div className="text-teal-500">Total Result: 22</div>
    //             <div className="text-red-500">Status: Fail</div>
    //           </div>
    //           <div className="p-4 bg-teal-100 rounded-lg shadow">
    //             <div className="text-teal-700 font-medium">
    //               Name: Sakariya Vinay
    //             </div>
    //             <div className="text-teal-700">Total Result: 22</div>
    //             <div className="text-red-500">Status: Fail</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="App">
    //   <div className="flex flex-col md:flex-row">
    //     <Sidebar />
    //     <div className="w-full bg-blue-50 md:ml-64">
    //       <Navbar setIsLoggedIn={setIsLoggedIn} />
    //       <div className="p-5">
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    //           <div className="bg-white rounded-lg shadow-md p-4">
    //             <p className="text-center text-blue-700">Total Questions</p>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>
    //           <div className="bg-white rounded-lg shadow-md p-4">
    //             <p className="text-center text-blue-700">Total Quiz</p>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>
    //           <div className="bg-white rounded-lg shadow-md p-4">
    //             <p className="text-center text-blue-700">Total Sections</p>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-purple-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>
    //           <div className="bg-white rounded-lg shadow-md p-4">
    //             <p className="text-center text-blue-700">Total Results</p>
    //             <div className="flex justify-center mt-3">
    //               <div className="bg-pink-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
    //                 4
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col lg:flex-row gap-5 p-5">
    //         <div className="bg-white rounded-lg shadow-md p-4 w-full lg:w-2/3">
    //           <h2 className="text-lg font-semibold text-blue-700">
    //             Top Student
    //           </h2>
    //           <table className="w-full mt-3">
    //             <thead>
    //               <tr>
    //                 <th className="border px-4 py-2">Number</th>
    //                 <th className="border px-4 py-2">Name</th>
    //                 <th className="border px-4 py-2">Email-id</th>
    //                 <th className="border px-4 py-2">Exam Name</th>
    //                 <th className="border px-4 py-2">Total Marks</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               <tr>
    //                 <td className="border px-4 py-2">1</td>
    //                 <td className="border px-4 py-2">Vinay</td>
    //                 <td className="border px-4 py-2">Vinay@gmail.com</td>
    //                 <td className="border px-4 py-2">Backend Developer</td>
    //                 <td className="border px-4 py-2">98/100</td>
    //               </tr>
    //               <tr>
    //                 <td className="border px-4 py-2">1</td>
    //                 <td className="border px-4 py-2">Vinay</td>
    //                 <td className="border px-4 py-2">Vinay@gmail.com</td>
    //                 <td className="border px-4 py-2">Backend Developer</td>
    //                 <td className="border px-4 py-2">98/100</td>
    //               </tr>
    //               <tr>
    //                 <td className="border px-4 py-2">1</td>
    //                 <td className="border px-4 py-2">Vinay</td>
    //                 <td className="border px-4 py-2">Vinay@gmail.com</td>
    //                 <td className="border px-4 py-2">Backend Developer</td>
    //                 <td className="border px-4 py-2">98/100</td>
    //               </tr>
    //               <tr>
    //                 <td className="border px-4 py-2">1</td>
    //                 <td className="border px-4 py-2">Vinay</td>
    //                 <td className="border px-4 py-2">Vinay@gmail.com</td>
    //                 <td className="border px-4 py-2">Backend Developer</td>
    //                 <td className="border px-4 py-2">98/100</td>
    //               </tr>
    //               <tr>
    //                 <td className="border px-4 py-2">1</td>
    //                 <td className="border px-4 py-2">Vinay</td>
    //                 <td className="border px-4 py-2">Vinay@gmail.com</td>
    //                 <td className="border px-4 py-2">Backend Developer</td>
    //                 <td className="border px-4 py-2">98/100</td>
    //               </tr>
    //               <tr>
    //                 <td className="border px-4 py-2">1</td>
    //                 <td className="border px-4 py-2">Vinay</td>
    //                 <td className="border px-4 py-2">Vinay@gmail.com</td>
    //                 <td className="border px-4 py-2">Backend Developer</td>
    //                 <td className="border px-4 py-2">98/100</td>
    //               </tr>
    //               <tr>
    //                 <td className="border px-4 py-2">1</td>
    //                 <td className="border px-4 py-2">Vinay</td>
    //                 <td className="border px-4 py-2">Vinay@gmail.com</td>
    //                 <td className="border px-4 py-2">Backend Developer</td>
    //                 <td className="border px-4 py-2">98/100</td>
    //               </tr>
    //               <tr>
    //                 <td className="border px-4 py-2">1</td>
    //                 <td className="border px-4 py-2">Vinay</td>
    //                 <td className="border px-4 py-2">Vinay@gmail.com</td>
    //                 <td className="border px-4 py-2">Backend Developer</td>
    //                 <td className="border px-4 py-2">98/100</td>
    //               </tr>
    //               <tr>
    //                 <td className="border px-4 py-2">1</td>
    //                 <td className="border px-4 py-2">Vinay</td>
    //                 <td className="border px-4 py-2">Vinay@gmail.com</td>
    //                 <td className="border px-4 py-2">Backend Developer</td>
    //                 <td className="border px-4 py-2">98/100</td>
    //               </tr>
    //               <tr>
    //                 <td className="border px-4 py-2">1</td>
    //                 <td className="border px-4 py-2">Vinay</td>
    //                 <td className="border px-4 py-2">Vinay@gmail.com</td>
    //                 <td className="border px-4 py-2">Backend Developer</td>
    //                 <td className="border px-4 py-2">98/100</td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //         <div className="bg-gray-100 shadow-lg p-4 rounded-lg w-full lg:w-1/3">
    //           <h2 className="text-lg font-semibold text-blue-700 mb-4">
    //             Recent Exams
    //           </h2>
    //           <div className="space-y-4">
    //             <div className="p-4 bg-teal-100 rounded-lg shadow">
    //               <div className="text-teal-700 font-medium">
    //                 Name: Sakariya Vinay
    //               </div>
    //               <div className="text-teal-500">Total Result: 22</div>
    //               <div className="text-red-500">Status: Fail</div>
    //             </div>
    //             <div className="p-4 bg-teal-100 rounded-lg shadow">
    //               <div className="text-teal-700 font-medium">
    //                 Name: Sakariya Vinay
    //               </div>
    //               <div className="text-teal-500">Total Result: 22</div>
    //               <div className="text-red-500">Status: Fail</div>
    //             </div>
    //             <div className="p-4 bg-teal-100 rounded-lg shadow">
    //               <div className="text-teal-700 font-medium">
    //                 Name: Sakariya Vinay
    //               </div>
    //               <div className="text-teal-500">Total Result: 22</div>
    //               <div className="text-red-500">Status: Fail</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="App">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="w-full bg-[#EEEEEE] md:ml-64">
          <Navbar setIsLoggedIn={setIsLoggedIn} />
          <div className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <p className="text-center text-blue-700">Total Questions</p>
                <div className="flex justify-center mt-3">
                  <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
                    4
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <p className="text-center text-blue-700">Total Quiz</p>
                <div className="flex justify-center mt-3">
                  <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
                    4
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <p className="text-center text-blue-700">Total Sections</p>
                <div className="flex justify-center mt-3">
                  <div className="bg-purple-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
                    4
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <p className="text-center text-blue-700">Total Results</p>
                <div className="flex justify-center mt-3">
                  <div className="bg-pink-500 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 p-5">
            <div className="bg-white rounded-lg shadow-md p-4 w-full lg:w-2/3">
              <h2 className="text-lg font-semibold text-blue-700">
                Top Student
              </h2>
              <table className="w-full mt-3">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 bg-blue-100 text-blue-700">
                      Number
                    </th>
                    <th className="border px-4 py-2 bg-green-100 text-green-700">
                      Name
                    </th>
                    <th className="border px-4 py-2 bg-yellow-100 text-yellow-700">
                      Email-id
                    </th>
                    <th className="border px-4 py-2 bg-purple-100 text-purple-700">
                      Exam Name
                    </th>
                    <th className="border px-4 py-2 bg-pink-100 text-pink-700">
                      Total Marks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array(10)
                    .fill()
                    .map((_, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2 bg-blue-50 text-blue-700">
                          1
                        </td>
                        <td className="border px-4 py-2 bg-green-50 text-green-700">
                          Vinay sakariya
                        </td>
                        <td className="border px-4 py-2 bg-yellow-50 text-yellow-700">
                          Vinay@gmail.com
                        </td>
                        <td className="border px-4 py-2 bg-purple-50 text-purple-700">
                          Backend Developer
                        </td>
                        <td className="border px-4 py-2 bg-pink-50 text-pink-700">
                          98/100
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-100 shadow-lg p-4 rounded-lg w-full lg:w-1/3">
              <h2 className="text-lg font-semibold text-blue-700 mb-4">
                Recent Student
              </h2>
              <div className="space-y-4">
                {Array(3)
                  .fill()
                  .map((_, index) => (
                    <div
                      key={index}
                      className="p-4 bg-teal-100 rounded-lg shadow"
                    >
                      <div className="text-teal-700 font-medium">
                        Name: Sakariya Vinay
                      </div>
                      <div className="text-teal-500">Total Result: 22</div>
                      <div className="text-red-500">Status: Fail</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
