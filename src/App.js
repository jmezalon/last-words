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
import MyWill from "./components/MyWill/MyWill";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [secret, setSecret] = useState("");
  const [secretError, setSecretError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please fill in all the fields");
      return;
    }
    if (
      username === process.env.REACT_APP_USERNAME &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      localStorage.setItem("isLoggedIn", true);
      setUsername("");
      setPassword("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleGo = () => {
    if (secret !== process.env.REACT_APP_SECRET_PAGE_CODE) {
      setSecretError("Invalid secret");
    } else {
      localStorage.setItem("isSecretCorrect", true);
      window.location.href = "/my-last-wish/my-will";
      setSecret("");
      setSecretError("");
    }
  };

  const loggedIn = localStorage.getItem("isLoggedIn");
  const correctSecret = localStorage.getItem("isSecretCorrect");

  return (
    <Router>
      <div style={{ paddingTop: "64px" }}>
        <Navbar isLoggedIn={loggedIn} setIsSecretCorrect={correctSecret} />
        <Routes>
          <Route
            path="/"
            element={
              !loggedIn ? (
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
              loggedIn ? (
                <LastWishPage
                  secret={secret}
                  setSecret={setSecret}
                  secretError={secretError}
                  setSecretError={setSecretError}
                  handleGo={handleGo}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/my-last-wish/my-will"
            element={
              loggedIn && correctSecret ? (
                <MyWill />
              ) : (
                <Navigate to="/my-last-wish" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
