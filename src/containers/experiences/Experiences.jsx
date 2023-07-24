import "./experiences.css";
import { arrowLeft, arrowRight, background, man, rating } from "./imports";
import locationTick from "../../assets/location-tick.png";

const Experiences = () => {
  return (
    <section className="xp section-padding" id="about">
      <h1>Tourist Experiences</h1>
      <div className="xp-content">
        <div className="xp-image">
          <img src={man} alt="" />
        </div>
        <div className="xp-info">
          <h2>Alemayehu Mitzi</h2>
          <div className="xp-location">
            <img src={locationTick} alt="" />
            <p>Germany</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra
            varius sem mi ut pretium, tortor nulla gravida. Turpis in nec tellus
            egestas. Vehicula ut facilisis velit turpis nulla nunc lobortis
            lobortis convallis.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. In viverra varius sem mi ut pretium, tortor nulla
            gravida. Turpis in nec tellus egestas. Vehicula ut facilisis velit
            turpis nulla nunc lobortis lobortis convallis.
          </p>
          <div className="xp-slider">
                <div className="xp-rating">
                    <img src={rating} alt="" />
                </div>
                <div className="xp-bar">
                    
                </div>
                <div className="xp-navigator">
                    <h3>01</h3>
                    <div className="xp-arrows">
                        <button>
                            <img src={arrowLeft} alt="" />
                        </button>
                        <button>
                            <img src={arrowRight} alt="" />
                        </button>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
