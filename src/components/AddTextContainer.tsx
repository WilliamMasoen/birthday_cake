import "../styles/AddTextContainer.css";
import { useState } from "react";

let status = false;

export const showPopup = () => {
  status = !status;
  //   AddTextContainer(status);
  console.log(status);
};

interface Content {
  title: string;
  description: string;
}

function AddTextContainer() {
  const [status, setStatus] = useState(1);

  const [Content, setContent] = useState<Content>({
    title: "",
    description: "",
  });

  return (
    <>
      <div
        className={
          status === 1 ? "add-text-container" : "add-text-container-inactive"
        }
      >
        <form className="add-text-form">
          <div className="add-text-title-container">
            <label id="add-text-title-label">Title (required):</label>
            <input
              type="text"
              name="add-text-title-input"
              id="add-text-title-input"
              placeholder="Happy Birthday, Will!"
              value={Content.title}
              required
            />
          </div>
          <div className="add-text-content-container">
            <input
              type="text"
              name="add-text-description-input"
              id="add-text-description-input"
              placeholder="Add Description (Optional)"
              value={Content.description}
            />
          </div>
          <div className="add-text-buttons-container">
            <div className="add-text-cancel-button-container">
              <button className="add-text-cancel-button">Cancel</button>
            </div>
            <div className="add-text-submit-button-container">
              <input
                type="submit"
                name="add-text-submit-button"
                id="add-text-submit-button"
                value="Add Message!"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTextContainer;
