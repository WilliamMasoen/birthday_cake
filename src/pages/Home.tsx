import "../styles/Home.css";
import AddTextButton from "../components/AddTextButton";
import AddTextContainer from "../components/AddTextContainer";

function Home() {
  return (
    <>
      <div className="top-container">
        {/* Add Text Popup Button */}
        <div>
          <AddTextButton />
        </div>

        {/* Refresh Button */}
        <div></div>
      </div>

      <div className="middle-container">
        {/* Birthday Cake */}

        {/* Birthday Caption */}

        {/* Add Text Popup Container */}
        <div>
          <AddTextContainer />
        </div>
      </div>

      <div className="bottom-container">{/* Footer Button */}</div>
    </>
  );
}

export default Home;
