import "../styles/BirthdayCake.css";
import cake from "../assets/images/cake.png";

function BirthdayCake() {
  const blowCandle = () => {};

  return (
    <>
      <div className="whole-cake-container">
        <div className="candle-container"></div>

        <div className="cake-container">
          <img src={cake} alt="" className="cake-image" />
        </div>
      </div>
    </>
  );
}

export default BirthdayCake;
