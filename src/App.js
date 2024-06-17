// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Main from "./componet/mainpage/main";
// import Createmain from "./componet/createquestion/createmain";
// import Quizmain from "./componet/Quize/quizemain";
// import QuestionAdd from "./componet/createquestion/questionadd";
// import Loginpage from "./componet/login/loginpage";
// import Signup from "./componet/login/Signup";
// import Userpages from "./componet/User/userpages";
// import Quizform from "./componet/Quize/quizform";
// import Userpage from "./componet/Quize/Userpage";
// import QuestionbyQuize from "./componet/Quize/QuestionbyQuize";
// import Sectionmain from "./componet/Section/SectionPage";
// import QuizetoSectionName from "./componet/Section/QuizetoSectionName";
// import QuizebySection from "./componet/Section/QuizebySection";
// import SectionHome from "./componet/Section/SectionHome";
// import PrivateRoute from "./PrivateRoute";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <PrivateRoute   >
//               <Main   />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/QuizetoSectionName"
//           element={
//             <PrivateRoute   >
//               <QuizetoSectionName setIsLoggedIn={setIsLoggedIn} />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Login"
//           element={<Loginpage setIsLoggedIn={setIsLoggedIn} />}
//         />
//         <Route path="/Signup" element={<Signup />} />
//         <Route
//           path="/"
//           element={
//             isLoggedIn ? (
//               <Main setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         <Route
//           path="/QuizetoSectionName"
//           element={
//             isLoggedIn ? (
//               <QuizetoSectionName setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         <Route
//           path="/createmain"
//           element={
//             isLoggedIn ? (
//               <Createmain setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         <Route
//           path="/questionadd"
//           element={
//             isLoggedIn ? (
//               <QuestionAdd setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />

//         <Route
//           path="/quizform"
//           element={
//             isLoggedIn ? (
//               <Quizform setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         <Route
//           path="/Quizmain/:id"
//           element={
//             isLoggedIn ? (
//               <Userpage setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />

//         <Route
//           path="/Quizmain"
//           element={
//             isLoggedIn ? (
//               <Quizmain setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />

//         <Route
//           path="Quizmain/QuestionbyQuize/:id"
//           element={
//             isLoggedIn ? (
//               <QuestionbyQuize setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         {/* <Route
//           path="/QuizetoSection"
//           element={
//             isLoggedIn ? (
//               <QuizetoSection setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         /> */}
//         <Route
//           path="/Sectionmain"
//           element={
//             isLoggedIn ? (
//               <Sectionmain setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         <Route
//           path="/Sectionmain/:id"
//           element={
//             isLoggedIn ? (
//               <SectionHome setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />

//         <Route
//           path="/SectionHome/Sectionmain/:id"
//           element={
//             isLoggedIn ? (
//               <QuizebySection setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         <Route
//           path="/QuizebySection"
//           element={
//             isLoggedIn ? (
//               <QuizebySection setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         <Route
//           path="/SectionHome"
//           element={
//             isLoggedIn ? (
//               <SectionHome setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         <Route
//           path="Sectionmain/Userpage/:id"
//           element={
//             isLoggedIn ? (
//               <Main setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         <Route
//           path="/userpages/:id"
//           element={
//             isLoggedIn ? (
//               <Userpages setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         <Route
//           path="/userpages"
//           element={
//             isLoggedIn ? (
//               <Main setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./componet/mainpage/main";
import Createmain from "./componet/createquestion/createmain";
import Quizmain from "./componet/Quize/quizemain";
import QuestionAdd from "./componet/createquestion/questionadd";
import Loginpage from "./componet/login/loginpage";
import Signup from "./componet/login/Signup";
import Userpages from "./componet/User/userpages";
import Quizform from "./componet/Quize/quizform";
import Userpage from "./componet/Quize/Userpage";
import QuestionbyQuize from "./componet/Quize/QuestionbyQuize";
import Sectionmain from "./componet/Section/SectionPage";
import QuizetoSectionName from "./componet/Section/QuizetoSectionName";
import QuizebySection from "./componet/Section/QuizebySection";
import SectionHome from "./componet/Section/SectionHome";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("authToken");
  console.log("jjjjjjjj", token);
  console.log("jjjjjjjjkkkkkkkkkkkk", isLoggedIn);
  useEffect(() => {
    if (token === "null") {
      setIsLoggedIn(false);
      console.log("hello");
    } else {
      console.log("pppppp", token);
      setIsLoggedIn(true);
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Main /> : <Loginpage />}
            </PrivateRoute>
          }
        />
        <Route
          path="/QuizetoSectionName"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuizetoSectionName /> : <Loginpage />}
              {/* <QuizetoSectionName setIsLoggedIn={setIsLoggedIn} /> */}
            </PrivateRoute>
          }
        />
        <Route path="/Logingpage" element={<Loginpage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/createmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Createmain /> : <Loginpage />}
              {/* <Createmain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/questionadd"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuestionAdd /> : <Loginpage />}
              {/* <QuestionAdd setIsLoggedIn={setIsLoggedIn} /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/quizform"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Quizform /> : <Loginpage />}
              {/* <Quizform setIsLoggedIn={setIsLoggedIn} /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/Quizmain/question-list"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Userpage /> : <Loginpage />}
              {/* <Userpage setIsLoggedIn={setIsLoggedIn} /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/Quizmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Quizmain /> : <Loginpage />}
              {/* <Quizmain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="Quizmain/question-list/question-select"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuestionbyQuize /> : <Loginpage />}
              {/* <QuestionbyQuize /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/Sectionmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Sectionmain /> : <Loginpage />}
              {/* <Sectionmain /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/Sectionmain/Section-quiz-list"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <SectionHome /> : <Loginpage />}
              {/* <SectionHome /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/SectionHome/Sectionmain/quizelist"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuizebySection /> : <Loginpage />}
              {/* <QuizebySection /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/QuizebySection"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <QuizebySection /> : <Loginpage />}
              {/* <QuizebySection /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/SectionHome"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <SectionHome /> : <Loginpage />}
              {/* <SectionHome /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="Sectionmain/Userpage/:id"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Main /> : <Loginpage />}
              {/* <Main /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/userpages/quiz-start"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Userpages /> : <Loginpage />}
              {/* <Userpages /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/userpages"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Main /> : <Loginpage />}
              {/* <Main /> */}
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
