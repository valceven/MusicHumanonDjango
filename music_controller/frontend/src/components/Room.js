import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Room() {
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  const { roomCode } = useParams();

  const getRoomDetails = async () => {
    try {
      const response = await fetch(`/api/get-room?code=${roomCode}`);
      const data = await response.json();

      // Update the state with the fetched data
      setVotesToSkip(data.votes_to_skip);
      setGuestCanPause(data.guest_can_pause);
      setIsHost(data.is_host);
    } catch (error) {
      console.error("Failed to fetch room details:", error);
    }
  };

  return (
    <div>
      <h3>{roomCode}</h3>
      <p>Votes to Skip: {votesToSkip}</p>
      <p>Guest Can Pause: {guestCanPause ? "Yes" : "No"}</p>
      <p>Room Host: {isHost ? "Yes" : "No"}</p>
      <p>Room Code: {roomCode}</p>
    </div>
  );
}
