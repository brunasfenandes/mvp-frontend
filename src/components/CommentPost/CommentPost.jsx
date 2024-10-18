import React from "react";
import "./CommentPost.scss";
import { FaTrashAlt } from "react-icons/fa";

const CommentPost = ({ chat }) => {
  return (
    <div>
      <div className="comment-post">
        <div className="comment-post__avatar"></div>
        <div className="comment-post__detail">
          <div className="comment-post__heading">
            <h2 className="comment-post__author">{chat.roomName}</h2>
            <div className="comment-post__actions">
              <FaTrashAlt className="comment-post__delete" />
            </div>
          </div>
          <p className="comment-post__message">{chat.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentPost;
