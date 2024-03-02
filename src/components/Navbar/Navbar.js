import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = ({ isLoggedIn, isSecretCorrect }) => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isSecretCorrect");
    window.location.href = "/";
  };

  return (
    <AppBar position="fixed" style={{ width: "100%", left: 0, top: 0 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Last Words
        </Typography>
        {(isLoggedIn || isSecretCorrect) && (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
