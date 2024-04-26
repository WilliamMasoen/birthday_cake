import "../styles/AddTextContainer.css";
// import { useState } from "react";

let status = false;

export const showPopup = () => {
  status = !status;
  //   AddTextContainer(status);
  console.log(status);
};

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
    </>
  );
}

export default AddTextContainer;
