import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./componet/mainpage/main";
import Createmain from "./componet/createquestion/createmain/createmain";
import Quizmain from "./componet/Quize/quizemain/quizemain";
import QuestionAdd from "./componet/createquestion/questionadd";
import Loginpage from "./componet/login/loginpage";
import Signup from "./componet/login/Signup";
import Userpages from "./componet/User/userpages";
import Quizform from "./componet/Quize/quizform";
import Resultmain from "./componet/result/resultbysectionhome/resultmain";
import QuestionbyQuize from "./componet/Quize/QuestionbyQuize";
import Sectionmain from "./componet/Section/sectionhome/sectionmain";
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
        <Route
          path="/resultmain"
          element={
            <PrivateRoute>
              {isLoggedIn == true ? <Resultmain /> : <Loginpage />}
              {/* <Sectionmain /> */}
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
