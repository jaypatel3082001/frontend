import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./componet/mainpage/main";
import Createmain from "./componet/createquestion/createmain/createmain";
import Sectionmain from "./componet/Section/sectionmain/Sectionmain";
import QuestionAdd from "./componet/createquestion/questionadd";
import LoginHomepage from "./componet/login/loginHomepage";
import Signup from "./componet/login/Signup";
import Userpages from "./componet/User/userpages";
import Sectionform from "./componet/Section/Sectionform";
import Resultmain from "./componet/result/resultquizhome/resultmain";
import QuestionbyQuize from "./componet/Section/QuestionbyQuize";
import Quizemain from "./componet/Quiz/Quizmain/Quizemain";
import AddSection from "./componet/Quiz/addSection";
import AddQuiz from "./componet/Quiz/addQuiz";
import QuizeHome from "./componet/Quiz/QuizHome";
import PrivateRoute from "./PrivateRoute";
import ResultStudent from "./componet/result/resultbystudent/resultstudentmain";
import Loginstudentpage from "./componet/login/loginpage";
import LoginAdminpage from "./componet/login/adminloginpage";
import AdminSignuppage from "./componet/login/Signup";
import { jwtDecode } from "jwt-decode";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStudentLoggedIn, setStudentIsLoggedIn] = useState(false);
  const token = localStorage.getItem("authToken");
  const tokenstudent = localStorage.getItem("authTokenstu");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decodes the token (doesn't verify signature)
        const currentTime = Date.now() / 1000; // Convert current time to seconds

        if (decoded.exp < currentTime) {
          localStorage.removeItem("authToken");
        } else {
          console.log(decoded);
        }
      } catch (error) {
        console.log("Invalid token:", error);
      }
    } else {
      console.log("No token found");
    }
  }, [token]);
  useEffect(() => {
    if (tokenstudent) {
      try {
        const decoded = jwtDecode(tokenstudent); // Decodes the token (doesn't verify signature)
        const currentTime = Date.now() / 1000; // Convert current time to seconds

        if (decoded.exp < currentTime) {
          localStorage.removeItem("authTokenstu");
        } else {
          console.log(decoded);
        }
      } catch (error) {
        console.log("Invalid token:", error);
      }
    } else {
      console.log("No token found");
    }
  }, [tokenstudent]);
  useEffect(() => {
    if (token === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [token]);
  useEffect(() => {
    if (tokenstudent === null) {
      setStudentIsLoggedIn(false);
    } else {
      setStudentIsLoggedIn(true);
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Main /> : <LoginHomepage />}
            </PrivateRoute>
          }
        />
        <Route
          path="/AddSection"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <AddSection /> : <LoginHomepage />}
              {/* <AddSection setIsLoggedIn={setIsLoggedIn} /> */}
            </PrivateRoute>
          }
        />
        <Route path="/" element={<LoginHomepage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/createmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Createmain /> : <LoginHomepage />}
              {/* <Createmain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/questionadd"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuestionAdd /> : <LoginHomepage />}
              {/* <QuestionAdd setIsLoggedIn={setIsLoggedIn} /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/Sectionform"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Sectionform /> : <LoginHomepage />}
              {/* <Sectionform setIsLoggedIn={setIsLoggedIn} /> */}
            </PrivateRoute>
          }
        />

        <Route
          path="/Sectionmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Sectionmain /> : <LoginHomepage />}
              {/* <Sectionmain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="Sectionmain/question-list/question-select"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuestionbyQuize /> : <LoginHomepage />}
              {/* <QuestionbyQuize /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/Quizemain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Quizemain /> : <LoginHomepage />}
              {/* <Quizemain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/Quizemain/Section-quiz-list"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuizeHome /> : <LoginHomepage />}
              {/* <QuizeHome /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/QuizeHome/Quizemain/quizelist"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <AddQuiz /> : <LoginHomepage />}
              {/* <AddQuiz /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/AddQuiz"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <AddQuiz /> : <LoginHomepage />}
              {/* <AddQuiz /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/QuizeHome"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuizeHome /> : <LoginHomepage />}
              {/* <QuizeHome /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="Quizemain/Userpage/:id"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Main /> : <LoginHomepage />}
              {/* <Main /> */}
            </PrivateRoute>
          }
        />
        <Route
          // path={`/userpages/quiz-start/${inputs.randomkey}`}
          path={`/userpages/quiz-start`}
          element={
            <PrivateRoute>
              {isStudentLoggedIn == true ? <Userpages /> : <LoginHomepage />}
              {/* <Userpages /> */}
            </PrivateRoute>
          }
        />

        <Route
          path="/resultmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Resultmain /> : <LoginHomepage />}
            </PrivateRoute>
          }
        />
        <Route
          path="/resultstudentmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <ResultStudent /> : <LoginHomepage />}
            </PrivateRoute>
          }
        />
        <Route
          path="/loginstudent"
          element={
            <PrivateRoute>
              <Loginstudentpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/loginadminpage"
          element={
            <PrivateRoute>
              <LoginAdminpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/adminsignuppage"
          element={
            <PrivateRoute>
              <AdminSignuppage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
// import React from "react";
// import html2pdf from "html2pdf.js";

// const Printpaper = () => {
//   const data = {
//     studentName: "SUDHANSHU PANDEY",
//     email: "Mr. ANAND PANDEY",
//     date: "1994-05-24",
//     examName: "Male",
//     subjects: [
//       {
//         code: "101",
//         name: "Hindi",
//         minMarks: 35,
//         maxMarks: 100,
//         obtainedMarks: 85,
//         remark: "D",
//       },
//       {
//         code: "102",
//         name: "English",
//         minMarks: 35,
//         maxMarks: 100,
//         obtainedMarks: 86,
//         remark: "D",
//       },
//       {
//         code: "103",
//         name: "Maths",
//         minMarks: 35,
//         maxMarks: 100,
//         obtainedMarks: 87,
//         remark: "D",
//       },
//       {
//         code: "104",
//         name: "Physics",
//         minMarks: 35,
//         maxMarks: 100,
//         obtainedMarks: 88,
//         remark: "D",
//       },
//       {
//         code: "105",
//         name: "Chemistry",
//         minMarks: 35,
//         maxMarks: 100,
//         obtainedMarks: 89,
//         remark: "D",
//       },
//     ],
//     totalMarks: 435,
//     result: "Pass",
//   };

//   const fetchDataAndExport = async () => {
//     // Step 1: Fetch data from the API

//     // Step 2: Format the data to match demo.txt
//     const formattedData = formatData(data);

//     // Step 3: Create a PDF and trigger download
//     downloadPdfFile(formattedData);
//   };

//   const formatData = (data) => {
//     let formattedText = `
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Marksheet</title>
//         <link
//           href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
//           rel="stylesheet"
//         />
//       </head>
//       <body class="font-sans">
//         <div class="container mx-auto border border-black p-5 max-w-lg">
//           <div class="text-center mb-5">
//             <img src="C:\Users\Admin\Desktop\logo.png" alt="Logo" class="w-24 h-24 mx-auto" />
//             <h1 class="text-2xl font-bold my-2">
//               CENTRAL BOARD OF HIGHER EDUCATION /CLONE
//             </h1>
//             <h3 class="text-xl">Central Hindu School</h3>
//           </div>
//           <p><strong>Student Name:</strong> ${data.studentName}</p>
//           <p><strong>Email:</strong> ${data.email}</p>
//           <p><strong>Date:</strong> ${data.date}</p>
//           <p><strong>Exam-Name:</strong> ${data.examName}</p>

//           <table class="w-full border-collapse border border-black mt-5">
//             <thead>
//               <tr>
//                 <th class="border border-black px-2 py-1">Subject Code</th>
//                 <th class="border border-black px-2 py-1">Subject Name</th>
//                 <th class="border border-black px-2 py-1">Min Marks</th>
//                 <th class="border border-black px-2 py-1">Max Marks</th>
//                 <th class="border border-black px-2 py-1">Marks Obtained</th>
//                 <th class="border border-black px-2 py-1">Remark</th>
//               </tr>
//             </thead>
//             <tbody>`;

//     data.subjects.forEach((subject) => {
//       formattedText += `
//               <tr>
//                 <td class="border border-black px-2 py-1">${subject.code}</td>
//                 <td class="border border-black px-2 py-1">${subject.name}</td>
//                 <td class="border border-black px-2 py-1">${subject.minMarks}</td>
//                 <td class="border border-black px-2 py-1">${subject.maxMarks}</td>
//                 <td class="border border-black px-2 py-1">${subject.obtainedMarks}</td>
//                 <td class="border border-black px-2 py-1">${subject.remark}</td>
//               </tr>`;
//     });

//     formattedText += `
//               <tr>
//                 <td colspan="4" class="border border-black px-2 py-1">
//                   <strong>Total</strong>
//                 </td>
//                 <td class="border border-black px-2 py-1"><strong>${data.totalMarks}</strong></td>
//                 <td class="border border-black px-2 py-1"></td>
//               </tr>
//             </tbody>
//           </table>
//           <div class="text-center mt-5">
//             <p><strong>Result:</strong> ${data.result}</p>
//           </div>
//         </div>
//       </body>
//     </html>`;

//     return formattedText;
//   };

//   const downloadPdfFile = (formattedData) => {
//     const element = document.createElement("div");
//     element.innerHTML = formattedData;
//     html2pdf().from(element).save("marksheet.pdf");
//   };

//   return (
//     <div>
//       <button onClick={fetchDataAndExport}>Export Data as PDF</button>
//     </div>
//   );
// };

// export default Printpaper;
