import { v4 as uuidv4 } from "uuid";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";
import s from "./Hero.module.css";

// import heroImg from "../../img/547854ec82411-removebg 1.png";

console.log(Carousel);

function Hero({ heroImgs }) {
  return (
    <Carousel>
      {heroImgs.map((img) => {
        return (
          <Carousel.Item key={uuidv4()} className={s.sectionCarousel}>
            <img className={s.imgItem} src={img.url} alt={img.alt} />
            <Carousel.Caption>
              <h3>{img.title}</h3>
              <p>{img.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Hero;

Hero.propTypes = {
  heroImgs: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};
