import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";

const initialState = {
  plants: data,
  filteredPlants: data,
};

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    filterPlantsByTerm: (state, action) => {
      state.filteredPlants = state.plants.filter(
        (plant) => plant.searchTerm === action.payload
      );
    },
  },
});

export const { filterPlantsByTerm } = plantsSlice.actions;
export default plantsSlice.reducer;
