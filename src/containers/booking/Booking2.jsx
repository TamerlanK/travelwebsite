import "./booking2.css";
import background from "../../assets/booking/bookingImg.png";
import calendar from "../../assets/booking/calendar.svg";
import locationTick from "../../assets/booking/location-tick.svg";
import star from "../../assets/booking/star.svg";
import user from "../../assets/booking/user.svg";

const Booking2 = () => {
  const handleInputClick = (e) => {
    if (e.target.type === "date" && e.target.value === "") {
      e.target.blur();
      e.target.type = "text";
    } else {
      e.target.type = "date";
      e.target.showPicker();
    }
  };
  return (
    <section className="booking">
      <div className="booking-col booking-left">
        {/* <img src={background} alt="" /> */}
        <div>
          <img src={background} alt="" />
        </div>
      </div>
      <div className="booking-col booking-right">
        <div className="booking-title">
          Book a <span>Flight</span> With Us Today
        </div>
        <form>
          <div className="booking-row booking-checkboxes">
            <label htmlFor="oneWay">
              <input type="radio" id="oneWay" name="direction" />
              One Way
            </label>
            <label htmlFor="roundTrip">
              <input type="radio" id="roundTrip" name="direction" />
              Round Trip
            </label>
          </div>
          <div className="booking-row booking-textinputs ">
            <img src={locationTick} alt="location-tick" />
            <input type="text" placeholder="Leaving from..." />
          </div>
          <div className="booking-row booking-textinputs">
            <img src={locationTick} alt="location-tick" />
            <input type="text" placeholder="Going to..." />
          </div>

          <div className="booking-row booking-dateinputs">
            <div>
              <img src={calendar} alt="calendar" />
              <input
                type="text"
                placeholder="Depart"
                onFocus={handleInputClick}
              />
            </div>
            <div>
              <img src={calendar} alt="calendar" />
              <input
                type="text"
                placeholder="Return"
                onFocus={handleInputClick}
              />
            </div>
          </div>

          <div className="booking-row booking-preferences">
            <div>
              <img src={user} alt="user" />
              <select>
                <option value="1">1 passenger</option>
                <option value="1">2 passengers</option>
                <option value="1">3 passengers</option>
                <option value="1">4 passengers</option>
              </select>
            </div>
            <div>
              <img src={star} alt="star" />
              <select>
                <option value="first">First Class</option>
                <option value="business">Business Class</option>
                <option value="econom">Econom Class</option>
                <option value="premium">Premium Class</option>
              </select>
            </div>
          </div>
          <div className="booking-row booking-btn">
            <button>Search Available Flights</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking2;
