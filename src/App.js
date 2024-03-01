import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import LastWishPage from "./components/LastWish/LastWishPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please fill in all the fields");
      return;
    }
    if (
      username === process.env.REACT_APP_USERNAME &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Router>
      <div style={{ paddingTop: "64px" }}>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login
                  username={username}
                  password={password}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  error={error}
                  setError={setError}
                />
              ) : (
                <Navigate to="/my-last-wish" replace />
              )
            }
          />
          <Route
            path="/my-last-wish"
            element={
              isLoggedIn ? <LastWishPage /> : <Navigate to="/" replace />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
