import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Groups from "./pages/Groups";
import Challenges from "./pages/Challenges";
import Therapy from "./pages/Therapy";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";

function App() {
  const [coins, setCoins] = useState(120);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("mindbridgeLoggedIn") === "true";
  });

  useEffect(() => {
    localStorage.setItem(
      "mindbridgeLoggedIn",
      isLoggedIn
    );
  }, [isLoggedIn]);

  return (
    <BrowserRouter>

      {isLoggedIn && <Navbar coins={coins} />}

      <Routes>

        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home coins={coins} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/notes"
          element={
            isLoggedIn ? (
              <Notes
                coins={coins}
                setCoins={setCoins}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/groups"
          element={
            isLoggedIn ? (
              <Groups />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/challenges"
          element={
            isLoggedIn ? (
              <Challenges
                coins={coins}
                setCoins={setCoins}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/therapy"
          element={
            isLoggedIn ? (
              <Therapy
                coins={coins}
                setCoins={setCoins}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/leaderboard"
          element={
            isLoggedIn ? (
              <Leaderboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile
                coins={coins}
                setIsLoggedIn={setIsLoggedIn}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;