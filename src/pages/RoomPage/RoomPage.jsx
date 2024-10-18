import React, { useEffect, useState } from "react";
import InputFooter from "../../components/InputFooter/InputFooter";
import axios from "axios";
import CommentPost from "../../components/CommentPost/CommentPost";
import "./RoomPage.scss";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function RoomPage() {
  const [roomChats, setRoomChats] = useState([]);
  const { id } = useParams();

  const fetchChat = async () => {
    const chats = await axios.get(`http://localhost:8080/room/${id}/chat`);
    setRoomChats(chats.data);
  };

  const handleDelete = async (chatId) => {
    await axios.delete(`http://localhost:8080/room/${id}/chat/${chatId}`);
    fetchChat();
  };

  useEffect(() => {
    fetchChat();
  }, []);

  return (
    <div>
      <div className="title">
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <h2>{roomChats[0]?.roomName}</h2>
      </div>
      <InputFooter />{" "}
      <section className="chats">
        {roomChats?.map((chat) => (
          <CommentPost chat={chat} handleDelete={handleDelete} />
        ))}
      </section>
    </div>
  );
}

export default RoomPage;
