import React from "react";
import "./CommentPost.scss";
import { FaTrashAlt } from "react-icons/fa";

const CommentPost = () => {
  return (
    <div>
      <div className="comment-post">
        <div className="comment-post__avatar"></div>
        <div className="comment-post__detail">
          <div className="comment-post__heading">
            <h2 className="comment-post__author">John Doe</h2>
            <div className="comment-post__actions">
              <p className="comment-post__date">3 years ago</p>
              <FaTrashAlt className="comment-post__delete" />
            </div>
          </div>
          <p className="comment-post__message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            excepturi atque porro suscipit, quo fugiat veritatis reprehenderit
            temporibus nemo blanditiis autem quidem tempore consectetur sed cum
            odio velit nam praesentium?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentPost;
