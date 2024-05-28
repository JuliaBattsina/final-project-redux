import "./About.styles.css";
import Image19 from "../../images/image19.jpg";
import { categories } from "../../data/categories";
import { useState } from "react";

function About() {
  const [pots, setPots] = useState(0);
  const { image2 } = categories[pots];

  const previousPicture = () => {
    setPots((pots) => {
      pots--;
      if (pots < 0) {
        return categories.length - 1;
      }
      return pots;
    });
  };
  const nextPicture = () => {
    setPots((pots) => {
      pots++;
      if (pots > categories.length - 1) {
        pots = 0;
      }
      return pots;
    });
  };
  return (
    <div className="Start">
      <div className="images-container">
        <div className="overtext">
          <p>Our Story</p>
        </div>
        <img src={Image19} alt="first" />
      </div>

      <div className="textscontainer">
        <p className="english-text">
          Our online plant store, "Flowerd", started its journey with a dream to
          make green beauties accessible to everyone, regardless of their
          location. Launched in 2010, we aimed to offer a wide selection of
          quality plants in beautiful pots so our customers could adorn their
          homes with the greenery and joy of living nature.
        </p>
      </div>

      <div className="images-container">
        <img src={image2} alt="plant" className="second-image" />
      </div>
      <div className="btn_container">
        <button onClick={previousPicture}>Previous</button>
        <button onClick={nextPicture}>Next</button>
      </div>
      <div className="textscontainer">
        <p className="english-text">
          We take pride in our products and are confident that you will find in
          our store what suits your interior best. Our plants are grown with
          love and care to bring beauty and coziness into your home. We are
          delighted to assist you in creating a green corner in your house!
        </p>
      </div>
    </div>
  );
}

export default About;
