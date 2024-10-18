import "./HomePage.scss";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import axios from "axios";

const port = import.meta.env.VITE_PORT;
const backendURL = import.meta.env.VITE_BACKEND_URL;

function HomePage() {
  const [rooms, setRooms] = useState([]);

  const colors = [
    "#96bbbb",
    "#f0a7a0",
    "#f4d35e",
    "lightsalmon", 
    "#007aff",
    "#f4d35e", 
  ];

  const fetchRooms = async () => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/room`);
      setRooms(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="main">
      <h1>CHAT ROOMS</h1>
      
      <div className="card-list">
        {rooms.map((room, index) => {
          const backgroundColor = colors[index % colors.length];
          return (
            <Card
              key={room.roomId}
              name={room.roomName}
              backgroundColor={backgroundColor}
              roomId={room.roomId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;