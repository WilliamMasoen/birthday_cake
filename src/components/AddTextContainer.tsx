import { useState } from "react";
import "../styles/AddTextContainer.css";

const [status, setStatus] = useState(false);

function AddTextContainer() {
  return (
    <>
      <div
        className={
          status === false
            ? "add-text-container-inactive"
            : "add-text-container"
        }
      >
        Hello World
      </div>

      <div>Hello world</div>
    </>
  );
}

export default AddTextContainer;
