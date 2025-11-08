import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profiles from "./pages/Profiles";
import './App.css';
import Gamedev from "./pages/Gamedev";
import Fullstack from "./pages/Fullstack";
import Projectsgame from './pages/Projectsgame';
import Projectsfull from './pages/Projectsfull';
import SkillsAchievements from "./pages/SkillsAchievements";
// import { GlobeDemo } from "./components/Globedemo";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Profiles/>} />
          <Route path="/gamedev" element={<Gamedev/>} />
          <Route path="/fullstack" element={<Fullstack/>} />
          <Route path="/projectsfull" element={<Projectsfull/>} />
          <Route path="/projectsgame" element={<Projectsgame/>} />
          <Route path="/skills" element={<SkillsAchievements/>} />
        </Routes>
    </Router>
  );
}

export default App;
