import React from "react";
import "./ChatPage.scss";
import CommentPost from "../../components/CommentPost/CommentPost";

const ChatPage = () => {
  const str = "abcde".split("");
  return (
    <div className="chat">
      {str.map((i, index) => (
        <CommentPost key={index} />
      ))}
    </div>
  );
};

export default ChatPage;
