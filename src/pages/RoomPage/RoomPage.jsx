import React, { useEffect, useState, useRef } from "react";
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
  const [scrollTrigger, setScrollTrigger] = useState(false);

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

  const postChat = async (body) => {
    const chat = await axios.post(
      `http://localhost:8080/room/${id}/chat`,
      body
    );
    setRoomChats([...roomChats, chat.data]);
    setScrollTrigger(true);
  };

  const commentEndRef = useRef(null);

  // Scroll to the bottom whenever the chat array changes
  useEffect(() => {
    if (commentEndRef.current) {
      if (scrollTrigger === true)
        commentEndRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollTrigger(false);
    }
  }, [scrollTrigger]);

  return (
    <div>
      <div className="title">
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <h2>{roomChats[0]?.roomName}</h2>
      </div>
      <section className="chats">
        {roomChats?.map((chat) => (
          <CommentPost
            chat={chat}
            handleDelete={handleDelete}
            end={commentEndRef}
            key={chat.commentId}
          />
        ))}
      </section>
      <InputFooter postFunction={postChat} />{" "}
    </div>
  );
}

export default RoomPage;
