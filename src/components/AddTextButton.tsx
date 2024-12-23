import "../styles/AddTextButton.css";

interface AddTextButtonProps {
  onClick: () => void;
}

function AddTextButton({ onClick }: AddTextButtonProps) {
  return (
    <>
      <div className="add-text-button-container">
        <button className="add-text-button" onClick={onClick}>
          <span>Add Message</span>
        </button>
      </div>
    </>
  );
}

export default AddTextButton;
