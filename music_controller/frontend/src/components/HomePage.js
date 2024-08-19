import React, { Component } from "react";
import RoomJoinPage from "./RoomJoin";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/" element={<p>This is the HomePage</p>} />
        </Routes>
      </Router>
    );
  }
}
