import React, { useEffect, useState } from "react";
import InputFooter from "../../components/InputFooter/InputFooter";
import axios from "axios";
import CommentPost from "../../components/CommentPost/CommentPost";
import "./RoomPage.scss";
import { useParams } from "react-router-dom";

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
      RoomPage
      <section className="chats">
        {roomChats?.map((chat) => (
          <CommentPost chat={chat} />
        ))}
      </section>
      <InputFooter />{" "}
    </div>
  );
}

export default RoomPage;
