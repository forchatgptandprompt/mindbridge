import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Groups from "./pages/Groups";
import Therapy from "./pages/Therapy";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/notes" element={<Notes />} />

        <Route path="/groups" element={<Groups />} />

        <Route path="/therapy" element={<Therapy />} />

        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;