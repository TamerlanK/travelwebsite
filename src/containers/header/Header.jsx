import "./header.css";
import { headerImg1, headerImg2, headerImg3 } from "./imports";

const Stat = ({ title, value }) => (
  <div className="header-content-stats-stat">
    <p>{title}</p>
    <h3>{value}</h3>
  </div>
);

const Header = () => {
  return (
    <header className="header section__padding" id="home">
      <div className="header-info">
        <h1>
          <span>Discover</span>
          <span> New</span> <br />
          Experiences
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sem
          suspendisse tristique habitant consectetur cursus at. Leo in eget
          convallis nunc rhoncus nulla m
        </p>
        <button>Explore</button>
      </div>
      <div className="header-content">
        <div className="header-content-images">
          <img src={headerImg1} alt="headerimg" />
          <img src={headerImg2} alt="headerimg" />
          <img src={headerImg3} alt="headerimg" />
        </div>
        <div className="header-content-stats">
          <Stat title="Tourist" value="25.5K" />
          <Stat title="Tourist Guide" value="2k+" />
          <Stat title="Tourist center" value="1.1+K" />
        </div>
      </div>
    </header>
  );
};

export default Header;
