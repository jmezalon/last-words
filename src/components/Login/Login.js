import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
  error,
  setError,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "90vh", paddingBottom: "50%", paddingTop: "10%" }}
    >
      <Grid item xs={10} sm={8} md={6} lg={5}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom align="center">
              Login
            </Typography>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              margin="normal"
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {error && (
              <Typography
                variant="body2"
                style={{ textAlign: "center" }}
                color="error"
                gutterBottom
              >
                {error}
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              fullWidth
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
