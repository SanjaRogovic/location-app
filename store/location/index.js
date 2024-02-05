export const state = () => ({
  locations: [],
});

export const mutations = {
  setLocations(state, locations) {
    state.locations = locations;
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
      // console.error("Error fetching locations:", error);
    }
  },
};

export const getters = {
  getLocationById: (state) => (id) => {
    return state.locations.find((loc) => loc.id === id);
  }
}
