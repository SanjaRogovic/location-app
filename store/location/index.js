export const state = () => ({
  locations: [],
  suggestedLocations: [],
});

export const mutations = {
  setLocations(state, locations) {
    state.locations = locations;
  },
  setSuggestedLocations(state, suggestedLocations) {
    state.suggestedLocations = suggestedLocations;
  },
};

export const actions = {
  async fetchLocations({ commit }, query) {
    try {
      const response = await this.$axios.get(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
      );
      const locations = response.data;
      console.log("ALL LOCATIONS", response.data)
      commit("setLocations", locations);
    } catch (error) {
      console.error("Error fetching searched locations:", error);
    }
  },

  async fetchSuggestedLocations({ commit }) {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: [
              { id: 1, name: "New York" },
              { id: 2, name: "Los Angeles" },
              { id: 3, name: "San Francisco" },
            ],
          });
        }, 1000); // delay of 1 second
      });

      const suggestedLocations = response.data;
      commit("setSuggestedLocations", suggestedLocations);
    } catch (error) {
      console.error("Error fetching suggested locations: ", error)
    }
  },
};

export const getters = {
  getLocationById: (state) => (id) => {
    return state.locations.find((loc) => loc.id === id);
  },
  suggestedLocations: (state) => state.suggestedLocations
}
