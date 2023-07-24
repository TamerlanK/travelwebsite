import logo from "../../assets/recom/logo.png";
import arrowLeft from "../../assets/recom/arrow-left.png";
import arrowRight from "../../assets/recom/arrow-right.png";
import recomVideo from "../../assets/recom/recom-video.png";
import locationTick from "../../assets/packages/location-tick.png";
import play from "../../assets/recom/play.png";
import styles from "./styles.module.css";

const cardData = {
  title: "Forbidden City",
  location: "Beijing",
  text: "The Forbidden City (Chinese: 紫禁城; pinyin: Zǐjìnchéng) is a palace complex in Dongcheng District, Beijing, China, at the center of the Imperial City of Beijing. It is surrounded by numerous opulent imperial gardens and temples including the 22 ha (54-acre) Zhongshan Park, the sacrificial Imperial Ancestral Temple, the 69 ha (171-acre) Beihai Park, and the 23 ha (57-acre) Jingshan ParkThe Forbidden City was constructed from 1406 to 1420, and was the former Chinese imperial palace and winter residence of the Emperor of China from the Ming dynasty (since the Yongle Emperor) to the end of the Qing dynasty, between 1420 and 1924.",
};

const RecommendationsCard = ({ title, location, text }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <div className={styles.recomCardLocation}>
          <img src={locationTick} />
          <p>{location}</p>
        </div>
      </div>
      <div>
        <p className={styles.recomCardText}>{text}</p>
      </div>
      <button>Take a Tour</button>
    </>
  );
};

const Recommendations = () => {
  return (
    <section className={`${styles.recom} section-padding`}>
      {/* <div className={styles.recomSide}>
        <RecommendationsCard
          title={cardData.title}
          location={cardData.location}
          text={cardData.text}
        />
      </div> */}
      <div className={styles.recomContent}>
        <div className={styles.recomHeader}>
          <img src={logo} />
          <h1>
            <span>Best</span> Recommendations
          </h1>
        </div>
        <div className={styles.recomVideo}>
          <img src={recomVideo} alt="" />
          <div>
            <img src={play} alt="" />
          </div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.recomButtons}>
          <button>
            <img src={arrowLeft} alt="" />
          </button>
          <button>
            <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
