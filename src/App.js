import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllocateClassroom from "./components/AllocateClassroom";
import AllocateSubjects from "./components/AllocateSubjects";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import StudentDetails from "./components/StudentDetails";
import StudentDetailsReport from "./components/StudentDetailsReport";
import SubjectDetails from "./components/SubjectDetails";
import TeacherDetails from "./components/TeacherDetails";

function App() {
  return (
    <div>
      <div>
      <Header />
      </div>
      

      <div>
      
      <Routes>
        <Route path="/studentDetails" element={<StudentDetails />} />
        <Route path="/teacherDetails" element={<TeacherDetails />} />
        <Route path="/subjectDetails" element={<SubjectDetails />} />
        <Route path="/allocateSubjects" element={<AllocateSubjects />} />
        <Route path="/allocateClassroom" element={<AllocateClassroom />} />
        <Route path="/studentReport" element={<StudentDetailsReport />} />
      </Routes>
      </div>
      <div>
      <NavBar />
      </div>
      
      
    </div>
  );
}

export default App;
