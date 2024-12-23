import "../styles/FooterContainer.css";
import infoIcon from "../assets/images/info.png";

function FooterContainer() {
  const visitCount = 0;

  return (
    <>
      <div className="footer-container">
        <div className="image-container">
          <img src={infoIcon} alt="" className="info-icon" />
        </div>

        <div className="info-container">
          <p>
            Build by{" "}
            <a href="https://www.aliantomasoen.com" target="_blank">
              Alianto Masoen
            </a>
          </p>
          <p>{visitCount} visits</p>
        </div>
      </div>
    </>
  );
}

export default FooterContainer;
