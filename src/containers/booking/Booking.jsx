import "./booking.css";
import bookingImg from "../../assets/booking/bookingImg.png";
import locationTick from "../../assets/booking/location-tick.png";
import arrowUp from "../../assets/booking/arrow-up.png";
import arrowDown from "../../assets/booking/arrow-down.png";
import user from "../../assets/booking/user.png";
import star from "../../assets/booking/star.png";
import { useRef, useState } from "react";

const Booking = () => {
  const [departDate, setDepartDate] = useState("Depart");
  const [returnDate, setReturnData] = useState("Return");
  const [passengers, setPassengers] = useState(1);
  const departRef = useRef();
  const returnRef = useRef();
  return (
    <section className="booking-section">
      <div className="booking-image">
        <img src={bookingImg} alt="booking img" />
      </div>
      <div className="booking-form-section">
        <div className="booking-form-section-heading">
          <h1>
            Book a <span>Flight</span> With Us Today
          </h1>
        </div>
        <form>
          <div className="form-row form-row-1">
            <div>
              <input type="radio" id="oneway" name="select" />
              <label htmlFor="oneway">One Way</label>
            </div>
            <div>
              <input type="radio" id="roundtrip" name="select" />
              <label htmlFor="roundtrip">Round Trip</label>
            </div>
          </div>
          <div className="form-row form-text-input">
            <img src={locationTick} alt="leaving from" />
            <input type="text" placeholder="Leaving from..." />
          </div>
          <div className="form-row form-text-input">
            <img src={locationTick} alt="going to" />
            <input type="text" placeholder="Going to..." />
          </div>
          <div className="form-row form-row-4">
            <div>
              <label
                htmlFor="depart"
                onClick={(e) => {
                  departRef.current.showPicker();
                }}
              >
                <input
                  type="date"
                  id="depart"
                  ref={departRef}
                  onChange={(e) => setDepartDate(e.target.value)}
                />
                <span>{departDate === "" ? "Depart" : departDate}</span>
              </label>
            </div>
            <div>
              <label
                htmlFor="return"
                onClick={(e) => {
                  returnRef.current.showPicker();
                }}
              >
                <input
                  type="date"
                  id="return"
                  ref={returnRef}
                  onChange={(e) => setReturnData(e.target.value)}
                />
                <span>{returnDate === "" ? "Return" : returnDate}</span>
              </label>
            </div>
          </div>

          <div className="form-row form-row-5">
            <div className="form-row-5-left">
              <img src={user} />
              <input
                type="number"
                placeholder={`${passengers} ${
                  passengers > 1 ? "passengers" : "passenger"
                }`}
                className="input-number"
              />
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPassengers((prev) => prev + 1);
                  }}
                >
                  <img src={arrowUp} alt="arrow up" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    passengers != 1 && setPassengers((prev) => prev - 1);
                  }}
                >
                  <img src={arrowDown} alt="arrowdown" />
                </button>
              </div>
            </div>
            <div className="form-row-5-right">
              <select>
                <option value="first">First Class</option>
                <option value="econom">Econom Class</option>
                <option value="premium">Premium Class</option>
                <option value="business">Business Class</option>
              </select>
              <div className="star">
                <img src={star} alt="star" />
              </div>
            </div>
          </div>
          <div className="form-row form-row-6">
            <button>Search Available Flights</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
