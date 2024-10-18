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

  useEffect(() => {
    const fetchChat = async () => {
      const chats = await axios.get(`http://localhost:8080/room/${id}/chat`);
      setRoomChats(chats.data);
    };

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
          <CommentPost key={chat.commentId} chat={chat} />
        ))}
      </section>
      <InputFooter roomId={id} />
    </div>
  );
}

export default RoomPage;
