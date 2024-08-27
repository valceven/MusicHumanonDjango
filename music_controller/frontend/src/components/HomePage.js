import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import RoomJoinPage from "./RoomJoin";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from "@mui/material";

const HomePage = () => {
  const [userRoomData, setUserRoomData] = useState(null);

  useEffect(() => {
    const fetchUserRoomData = async () => {
      try {
        const response = await fetch("/api/user-in-room");
        const data = await response.json();
        setUserRoomData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchUserRoomData();
  }, []);

  const renderHomePage = () => {
    return (
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ maxHeight: "100vh" }}
      >
        <Grid item xs={12} align="center">
          <Typography variant="h3" component="h3">
            Party House
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" component={Link} to="/join">
              Join A Room
            </Button>
            <Button color="secondary" component={Link} to="/create">
              Create A Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            userRoomData?.roomCode ? (
              <Navigate to={`/room/${userRoomData.roomCode}`} />
            ) : (
              renderHomePage()
            )
          }
        />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/room/:roomCode" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default HomePage;
