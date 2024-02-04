export const state = () => ({
  locations: [],
  selectedLocation: {},
})

export const mutations = {
  setLocations(state, locations) {
    state.locations = locations
  },
  setSelectedLocation(state, location) {
    state.selectedLocation = location
  },
}

export const actions = {
  async fetchLocations({ commit }, query) {
    try {
      const response = await this.$axios.get(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
      )
      commit('setLocations', response.data)
      commit('setSelectedLocation', response.data.place_id)
    //   console.log(response.data)
    } catch (error) {
        // console.error('Error searching location:', error);
    }
  },
//   setSelectedLocation({ commit }, location) {
//     commit('setSelectedLocation', location)
//   },
}

export const getters = {
  locations: (state) => state.locations,
  selectedLocation: (state) => state.selectedLocation,
}
