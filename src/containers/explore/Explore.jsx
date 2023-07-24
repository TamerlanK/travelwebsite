import "./explore.css";
import { eiffel, gwoc, tajmahal, waterfall } from "./imports";
import {
  searchIcon,
  rightArrow,
  heartIcon,
  locationTick,
} from "./importsIcons";

const Article = ({ imgUrl, title, location, likes, className }) => {
  return (
    <article className={`explore-article ${className}`}>
      <div className="explore-article-image">
        <img src={imgUrl} alt="articleimage" />
      </div>
      <div className="explore-article-details">
        <div className="explore-article-left">
          <h1>{title}</h1>
          <div>
            <img src={locationTick} />
            <p>{location}</p>
          </div>
        </div>
        <div
          className={`explore-article-right ${
            (className === "eiffel" || className === "gwoc") && "likes-bottom"
          }`}
        >
          <img src={heartIcon} />
          <p>{likes}</p>
        </div>
      </div>
    </article>
  );
};

const Explore = () => {
  return (
    <section className="explore-section section-padding" id="explore">
      <div className="explore-heading">
        <h1>
          <span>Explore</span> The World
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sem
          suspendisse tristique habitant consectetur cursus at. Leo in eget
          convallis nunc rhoncus nulla m
        </p>

        <div className="explore-heading-search">
          <img src={searchIcon} alt="search" />

          <input
            type="text"
            placeholder="Search for Tourist center, location"
            id="searchbar"
          />

          <button>
            <img src={rightArrow} alt="arrow" />
          </button>
        </div>
        <div className="explore-title">
          <h2>Popular Searches</h2>
        </div>
      </div>
      <div className="explore-content">
        <Article
          imgUrl={waterfall}
          title="Agbokim waterfalls"
          location="Nigeria"
          likes="4321"
          className="waterfall"
        />
        <Article
          imgUrl={tajmahal}
          title="Taj Mahal"
          location="Agra"
          likes="4321"
          className="tajmahal"
        />
        <Article
          imgUrl={eiffel}
          title="Eiffel Tower"
          location="Paris"
          likes="231152"
          className="eiffel"
        />
        <Article
          imgUrl={gwoc}
          title="Great Wall of China"
          location="Beijing"
          likes="131253"
          className="gwoc"
        />
      </div>
      <div className="explore-see-more">
        <p>See More</p>
      </div>
    </section>
  );
};

export default Explore;
