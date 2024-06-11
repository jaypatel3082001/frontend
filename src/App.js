import "./App.css";
import React from "react";
import Main from "./componet/mainpage/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Createmain from "./componet/createquestion/createmain";
import Quizmain from "./componet/section/sectionmain";
import QuestionAdd from "./componet/createquestion/questionadd";
import Loginpage from "./componet/login/loginpage";
import Signup from "./componet/login/Signup";
import Sectionmain from "./componet/section/sectionmain";
import Quizform from "./componet/section/quizform";
import Userpage from "./componet/section/Userpage";
import QuestionbyQuize from "./componet/section/QuestionbyQuize";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/createmain" element={<Createmain />} />
        <Route path="/questionadd" element={<QuestionAdd />} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Sectionmain" element={<Sectionmain />} />
        <Route path="/quizform" element={<Quizform />} />
        <Route path="/allQuiz" element={<Quizmain />} />
        <Route path="/Sectionmain/:id" element={<Userpage />} />
        <Route path="/QuestionbyQuize" element={<QuestionbyQuize />} />
      </Routes>
    </Router>
  );
}

export default App;
