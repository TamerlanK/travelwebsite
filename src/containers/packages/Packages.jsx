import location from "../../assets/packages/location-tick.png";
import heart from "../../assets/packages/heart-icon.png";
import colosseum from "../../assets/packages/colosseum.png";
import grandcanyon from "../../assets/packages/grandcanyon.png";
import rio from "../../assets/packages/rio.png";
import "./packages.css";

const Package = ({ imgUrl, title, locationText, description, likes }) => {
  return (
    <div className="package">
      <div className="package-image">
        <img src={imgUrl} alt="package image" />
      </div>
      <div className="package-info">
        <div className="package-info-header">
          <div className="package-title">
            <h1>{title}</h1>
            <div className="location-div">
              <img src={location} alt="locationtick" />
              <p>{locationText}</p>
            </div>
          </div>
          <div className="package-likes">
            <img src={heart} alt="heart" />
            <p>{likes}</p>
          </div>
        </div>
        <p>{description}</p>
      </div>
      <button>Join Community</button>
    </div>
  );
};

const Packages = () => {
  return (
    <section className="packages-section section-padding">
      <div className="packages-header">
        <h1>
          <span>Free</span> Packages
        </h1>
        <p>
          Join our communities to stand a chance to win our free offers to one
          of these tourist centers.
        </p>
      </div>
      <div className="packages-content">
        <Package
          imgUrl={colosseum}
          title="Colosseum"
          locationText="Rome"
          description="The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age."
          likes="3245"
        />
        <Package
          imgUrl={grandcanyon}
          title="Grand Canyon"
          locationText="Arizona"
          description="The Grand Canyon in Arizona is a natural formation distinguished by layered bands of red rock, revealing millions of years of geological history in cross-section. Vast in scale, the canyon averages 10 miles across and a mile deep along its 277-mile length"
          likes="4321"
        />
        <Package
          imgUrl={rio}
          title="Christ the Redeemer"
          locationText="Rio de Janeiro"
          description="Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot."
          likes="6676"
        />
      </div>
      <h3>See More</h3>
    </section>
  );
};

export default Packages;
