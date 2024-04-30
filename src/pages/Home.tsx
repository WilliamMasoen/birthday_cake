import "../styles/Home.css";
import AddTextButton from "../components/AddTextButton";
import AddTextContainer from "../components/AddTextContainer";
import { useState } from "react";

function Home() {
  const [status, setStatus] = useState<boolean>(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <>
      <div className="top-container">
        {/* Add Text Popup Button */}
        <div>
          <AddTextButton onClick={toggleStatus} />
        </div>

        {/* Refresh Button */}
        <div></div>
      </div>

      <div className="middle-container">
        {/* Birthday Cake */}

        {/* Birthday Caption */}

        {/* Add Text Popup Container */}
        <div>
          <AddTextContainer status={status} />
        </div>
      </div>

      <div className="bottom-container">{/* Footer Button */}</div>
    </>
  );
}

export default Home;
