import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Groups from "./pages/Groups";
import Challenges from "./pages/Challenges";
import Therapy from "./pages/Therapy";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";

function App() {
  const [coins, setCoins] = useState(120);

  return (
    <BrowserRouter>
      <Navbar coins={coins} />

      <Routes>
        <Route
          path="/"
          element={<Home coins={coins} />}
        />

        <Route
          path="/notes"
          element={
            <Notes
              coins={coins}
              setCoins={setCoins}
            />
          }
        />

        <Route
          path="/groups"
          element={<Groups />}
        />

        <Route
          path="/challenges"
          element={
            <Challenges
              coins={coins}
              setCoins={setCoins}
            />
          }
        />

        <Route
          path="/therapy"
          element={
            <Therapy
              coins={coins}
              setCoins={setCoins}
            />
          }
        />

        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />

        <Route
          path="/profile"
          element={<Profile coins={coins} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;