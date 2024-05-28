import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterPlantsByTerm } from "../Redux/plantSlice";
import { addToCart } from "../Redux/cartSlice";
import Buttons from "./Buttons";
import "./Shop.styles.css";
import Swal from "sweetalert2";

function Shop() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const plants = useSelector((state) => state.plants.filteredPlants);
  const dispatch = useDispatch();

  const handleBuyNow = (item) => {
    dispatch(addToCart(item));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Add to the Cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleFilterPlants = (searchTerm) => {
    if (searchTerm) {
      dispatch(filterPlantsByTerm(searchTerm));
    } else {
      dispatch(filterPlantsByTerm(""));
    }
  };

  return (
    <div>
      <Buttons filteredPlants={handleFilterPlants} />
      <div className="products">
        {plants &&
          plants.map((element) => {
            const { id, name, price, image, image1 } = element;

            return (
              <div className="product-card" key={id}>
                <img
                  src={hoveredImage === image ? image1 : image}
                  width="400px"
                  height="500px"
                  alt="plant"
                  onMouseEnter={() => handleMouseEnter(image)}
                  onMouseLeave={handleMouseLeave}
                />
                <div className="product-info">
                  <div className="app">
                    <h3>{name}</h3>
                    <h4>${price}</h4>
                    <button onClick={() => handleBuyNow(element)}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Shop;
