import React from "react";
import { useDispatch } from "react-redux";
import MyImageComponent from "../../images/start.jpg";
import Image4 from "../../images/image4.jpg";
import Image5 from "../../images/image5.jpg";
import { data } from "../../data/data";
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/cartSlice";
import "./Home.styles.css";

function Home() {
  const dispatch = useDispatch();
  const handleBuyNow = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="App">
      <div className="images-container">
        <img src={MyImageComponent} alt="start" />
        <div className="overlay-text">
          <p>Plants and Pots</p>
          <p>For Your Home</p>
          <Link to="/shop" className="shop-link">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="block">
        <h2>Find Your Favorite One</h2>
        <div className="favorite-images">
          {data.slice(0, 3).map((item) => (
            <div className="image-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="image-info">
                <p className="text-info">{item.name}</p>
                <button onClick={() => handleBuyNow(item)}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="new-image-container">
        <img src={Image4} alt="Image4" />
      </div>
      <div className="gift-card-container">
        <div className="image-container">
          <img src={Image5} alt="Gift Card" />
          <p className="gift-card-text">GIFT CARD</p>
        </div>
        <div className="text-container">
          <h3>Give the Gift of Greenery</h3>
          <p>
            Plants are as thoughtful a gift as flowers and last much longer.
            With a gift card, you can brighten up someone’s home, office or dorm
            room with a potted plant of their choice. They’re available in any
            denomination and we’ll mail it for free!
          </p>
          <Link to="/contact" className="shop-link">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
