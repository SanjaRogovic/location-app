<template>
  <div class="location-details-container">
    <h2>Location Details</h2>
    <div  v-if="location">
      <p>Name: {{ location.name }}</p>
      <p>Latitude: {{ location.lat }}</p>
      <p>Longitude: {{ location.lon }}</p>
    </div>
    <div v-else>
      <p>No location selected</p>
    </div>
  </div>
</template>
  
<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState("location", ["locations"]),
    ...mapGetters("location", ["getLocationById"]),
    location() {
      const locationId = this.$route.params.osm_id;
      const location = this.getLocationById(locationId);

      // Log the retrieved location to the console for debugging
      console.log("SELECTED LOCATION:", location);

      return location;
    },
  },
};
</script>

<style scoped>
.location-details-container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgb(218, 218, 218);
  border: 1px solid #ccc;
  background-color: rgb(252, 252, 252);
}

.location-details-container h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.location-details-container div {
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
  
