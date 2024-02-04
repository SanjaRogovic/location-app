<template>
    <div v-if="selectedLocation" class="location-details-container" >
        <h2>Location Details</h2>
        <p>Name: {{ selectedLocation.display_name }}</p>
        <p>Latitude: {{ selectedLocation.lat }}</p>
        <p>Longitude: {{ selectedLocation.lon }}</p>
    </div>
</template>
  
<script>

export default {

    // fetch({ params }) {
    // Fetch location details based on params.id from Vuex store
    // const displayLocation = this.$store.getters.selectedLocation.find(loc => loc.osm_id === parseInt(params.id));
    // console.log("selected location", location)
//     return { displayLocation };
//   }


    computed: {
    selectedLocation() {
      return this.$store.getters.selectedLocation;
    }
  },
  methods: {
    selectLocation(params) {
      return this.$store.dispatch('selectedLocation/fetchLocations', params);
    }
  }
}
</script>

<style scoped>
.location-details-container {
    padding: 1rem;
    background-color: #f4f4f4;
    border-radius: 0.25rem;
    margin-top: 1rem;
}

.location-details-container h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.location-details-container p {
    margin-bottom: 1px;
}
</style>
  