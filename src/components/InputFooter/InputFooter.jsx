import "./InputFooter.scss";
import avatarImg from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";
import isToxic from "../../utils/toxicityCheck";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function InputFooter({ roomId }) {
  const [sendingComments, setSendingComments] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const mobileInput = event.target.commentMobile.value.trim();
    const otherInput = event.target.commentOther.value.trim();
    const comment = mobileInput || otherInput;

    if (name === "") {
      toast.error("Please enter your name!");
      return;
    }

    if (comment === "") {
      toast.error("Please enter a comment!");
      return;
    }

    if (!await isToxic(comment)) {
      try {
        const response = await axios.post(`http://localhost:8080/room/${roomId}/chat`, {
          name,
          comment,
        });
        event.target.reset();
        setSendingComments((current) => [response.data, ...current]);
      } catch (error) {
        toast.error("There was an error submitting your comment. Please try again.");
      }
    } else {
      toast.error("Your chat message was toxic and could be harmful to others. Please be respectful and kind.");
    }
  }

  return (
    <div className="input-footer">
      <div className="comments">
        <img
          src={avatarImg}
          alt="A user's face image"
          className="comments__avatar-image"
        />
        <form className="comments__form" onSubmit={handleSubmit}>
          <label htmlFor="comment" className="comments__title">
            Join the Conversation
          </label>
          <div className="input-button-box">
            <div className="comments__comment">
              <input
                type="text"
                className="input comments__name-input"
                name="name"
                id="name"
                placeholder="Add a name"
              />
              <textarea
                className="comments__input comments__input__textarea"
                id="commentTextArea"
                name="commentMobile"
                placeholder="Add a new comment"
              />
              <input
                type="text"
                className="comments__input comments__input__text"
                name="commentOther"
                id="commentInput"
                placeholder="Add a new comment"
              />
            </div>
            <button type="submit" className="comments__button button">
              <img
                src={commentIcon}
                alt="upload icon, interact to upload."
                className="comments__button-img"
              />
              <span className="comments__button-text">COMMENT</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputFooter;
