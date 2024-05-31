import "../styles/AddTextContainer.css";
// import { useState } from "react";

interface Content {
  title: string;
  description: string;
}

interface AddTextContainerProps {
  status: boolean;
  content: Content;
  tmpContent: Content;
  onChange: (name: string, value: string) => void;
  onClick: () => void;
}

function AddTextContainer({
  status,
  content,
  tmpContent,
  onChange,
  onClick,
}: AddTextContainerProps) {
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleSubmitButton = () => {
    if (tmpContent.title.trim() === "") {
      alert("Birthday title is empty!");
    } else {
      onClick();
    }
  };

  const handleCancelButton = () => {
    onClick();
  };

  return (
    <>
      <div
        className={
          status === true ? "add-text-container" : "add-text-container-inactive"
        }
      >
        <form name="add-text-form" className="add-text-form">
          <div className="add-text-title-container">
            <label id="add-text-title-label">Title*:</label>
            <input
              type="text"
              name="title"
              id="add-text-title-input"
              placeholder="Happy Birthday, Will!"
              value={tmpContent.title}
              onChange={handleContentChange}
              required
            />
          </div>
          <div className="add-text-content-container">
            <textarea
              type="text"
              name="description"
              id="add-text-description-input"
              placeholder="Add Description (Optional)"
              value={tmpContent.description}
              onChange={handleContentChange}
            />
          </div>
          <div className="add-text-buttons-container">
            <div className="add-text-cancel-button-container">
              <input
                type="button"
                name="add-text-cancel-button"
                id="add-text-cancel-button"
                value="Cancel"
                onClick={handleCancelButton}
              />
            </div>
            <div className="add-text-submit-button-container">
              <input
                type="button"
                name="add-text-submit-button"
                id="add-text-submit-button"
                value="Add Message!"
                onClick={handleSubmitButton}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTextContainer;
