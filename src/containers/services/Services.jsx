import { logo, serviceImg01, serviceImg02, serviceImg03 } from "./imports";
import "./services.css";

const ServicesCard = ({ number, imageUrl, infoTitle }) => {
  return (
    <div className="services-card">
      <div className="services-card-number">
        <h2>{number}</h2>
      </div>
      <div className="services-card-image">
        <img src={imageUrl} alt="service image" />
      </div>
      <div className="services-card-info">
        <h3>{infoTitle}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          neque voluptates voluptate.
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="services-section section-padding">
      <div className="services-header">
        <img src={logo} alt="logo" />
        <h1>Services</h1>
      </div>
      <div className="services-content">
        <ServicesCard
          number="01"
          imageUrl={serviceImg01}
          infoTitle="Best Hotels"
        />
        <ServicesCard
          number="02"
          imageUrl={serviceImg02}
          infoTitle="Tourist Guide"
        />
        <ServicesCard
          number="03"
          imageUrl={serviceImg03}
          infoTitle="Flight Tickets"
        />
      </div>
    </section>
  );
};

export default Services;
