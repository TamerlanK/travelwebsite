import "./companies.css";
import { boeing, southwest, qatar, united } from "./imports";

const Companies = () => {
  return (
    <div className="companies-container">
      <div className="company">
        <img src={southwest} alt="southwest" />
      </div>
      <div className="company">
        <img src={qatar} alt="qatar" />
      </div>
      <div className="company">
        <img src={boeing} alt="boeing" />
      </div>
      <div className="company">
        <img src={united} alt="united" />
      </div>
    </div>
  );
};

export default Companies;
