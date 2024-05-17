import "../styles/Home.css";
import AddTextButton from "../components/AddTextButton";
import AddTextContainer from "../components/AddTextContainer";
import { useState } from "react";

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
        <div className="cake-caption-container">
          {/* Birthday Cake */}
          <div className="cake-container"></div>

          {/* Birthday Caption */}
          <div className="caption-container">
            <p className="caption">Title: {content.title}</p>
            <p className="caption">Content: {content.description}</p>
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

      <div className="bottom-container">{/* Footer Button */}</div>
    </>
  );
}

export default Home;
