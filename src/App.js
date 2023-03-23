import "./App.css";
import { Route, Routes } from "react-router-dom";
import Summary from "./pages/Summary";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Summary */}
        <Route path="/summary" element={<Summary />} />
        {/* Technical Skills */}
        <Route path="/skills" element={<Skills />} />
        {/* Experience */}
        <Route path="/experience" element={<Experience />} />
        {/* Projects */}
        <Route path="/projects" element={<Projects />} />
        {/* Education */}
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
