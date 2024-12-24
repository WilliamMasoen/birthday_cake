import "../styles/AddTextButton.css";

interface AddTextButtonProps {
  onClick: (is_cancel: boolean) => void;
}

function AddTextButton({ onClick }: AddTextButtonProps) {
  const handleButton = () => {
    onClick(false);
  };

  return (
    <>
      <div className="add-text-button-container">
        <button className="add-text-button" onClick={handleButton}>
          <span>Add Message</span>
        </button>
      </div>
    </>
  );
}

export default AddTextButton;
