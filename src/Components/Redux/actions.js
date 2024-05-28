export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const filterPlants = (searchTerm) => ({
  type: "FILTER_PLANTS",
  payload: searchTerm,
});
