import "../styles/AddTextButton.css";
import { showPopup } from "./AddTextContainer";

function AddTextButton() {
  const openPopup = () => {
    showPopup();
  };
  return (
    <>
      <div className="add-text-button-container">
        <button className="add-text-button" onClick={openPopup}>
          <span>Add Message</span>
        </button>
      </div>
    </>
  );
}

export default AddTextButton;
