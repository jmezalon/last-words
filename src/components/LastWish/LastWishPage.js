import React from "react";
import "./LastWish.scss";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const LastWishPage = ({
  secret,
  setSecret,
  secretError,
  setSecretError,
  handleGo,
}) => {
  return (
    <Grid container spacing={3}>
      {/* Right column (main content) */}
      <Grid item xs={12} sm={6}>
        <div style={{ margin: "15px" }}>Main content goes here</div>
      </Grid>
      {/* Left column, this column should disappear if there's a secret in local storage or it should be just a Go button with no input field */}
      <Grid item xs={12} sm={6}>
        <Card style={{ height: "15vh", margin: "15px" }}>
          <CardContent>
            <TextField
              label="Enter Secret"
              variant="outlined"
              fullWidth
              value={secret}
              onChange={(e) => {
                setSecret(e.target.value);
                setSecretError("");
              }}
            />
            {secretError && (
              <Typography
                variant="body2"
                style={{ textAlign: "center" }}
                color="error"
                gutterBottom
              >
                {secretError}
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={handleGo}
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              Go
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LastWishPage;
