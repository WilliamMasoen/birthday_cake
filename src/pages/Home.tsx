import "../styles/Home.css";
import AddTextButton from "../components/AddTextButton";
import AddTextContainer from "../components/AddTextContainer";
import FooterContainer from "../components/FooterContainer";
import { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import ConfettiComponent from "../components/Confetti";
import BirthdayCake from "../components/BirthdayCake";

function Home() {
  const [status, setStatus] = useState<boolean>(false);

  const toggleStatus = () => {
    if (tmpContent.title.trim() !== "") {
      setContent({
        ...content,
        title: tmpContent.title,
        description: tmpContent.description,
      });
    }

    setStatus(!status);
  };

  const [content, setContent] = useState({
    title: "",
    description: "",
  });

  const [tmpContent, setTmpContent] = useState({
    title: "",
    description: "",
  });

  const handleTmpContent = (name: string, value: string) => {
    setTmpContent({
      ...tmpContent,
      [name]: value,
    });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="top-container">
        {/* Add Text Popup Button */}
        <div>
          <AddTextButton onClick={toggleStatus} />
        </div>

        {/* Refresh Button */}
        <div>
          <MdOutlineRefresh onClick={refreshPage} id="refresh-button" />
        </div>
      </div>

      <div className="middle-container">
        <div className="cake-caption-container">
          <div>
            <BirthdayCake />
          </div>

          {/* Birthday Caption */}
          <div className="caption-container">
            <p className="caption" id="caption-title">
              {content.title}
            </p>
            <p className="caption" id="caption-desc">
              {content.description}
            </p>
          </div>
        </div>

        {/* Add Text Popup Container */}
        <div className="popup-container">
          <AddTextContainer
            status={status}
            content={content}
            tmpContent={tmpContent}
            onChange={handleTmpContent}
            onClick={toggleStatus}
          />
        </div>
      </div>

      <div className="bottom-container">
        {/* Footer Button */}
        <div>
          <FooterContainer />
        </div>
        {/* <div className="confetti-button-container">
          <ConfettiComponent />
        </div> */}
      </div>
    </>
  );
}

export default Home;
