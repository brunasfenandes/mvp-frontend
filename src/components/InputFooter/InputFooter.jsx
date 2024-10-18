import "./InputFooter.scss";
import avatarImg from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";

function InputFooter() {
  async function handleSubmit(event) {
    event.preventDefault();
    const mobileInput = event.target.commentMobile.value;
    const otherInput = event.target.commentOther.value;
    if (mobileInput.trim() === "" && otherInput.trim() === "") {
      alert("Please enter the comment!");
    } else {
      const userInput = prompt("Please enter your name: ");

      if (userInput) {
        const response = await api.postComment(videoId, {
          name: userInput,
          comment: mobileInput === "" ? otherInput : mobileInput,
        });
        event.target.reset();
        setSendingComments((current) => [response, ...current]);
      }
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
              ></input>
              <textarea
                type="text"
                className="comments__input input no-tablet"
                id="commentTextArea"
                name="commentMobile"
                placeholder="Add a new comment"
              ></textarea>
              <input
                type="text"
                className="comments__input input no-mobile"
                name="commentOther"
                id="commentInput"
                placeholder="Add a new comment"
              ></input>
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
