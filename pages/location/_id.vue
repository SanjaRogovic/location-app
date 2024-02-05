<template>
    <div class="location-details-container" >
        <h2>Location Details</h2>
        <p>Name: {{ location.name }}</p>
        <p>Latitude: {{ location.lat }}</p>
        <p>Longitude: {{ location.lon }}</p>
    </div>
</template>
  
<script>
import { mapState, mapGetters  } from "vuex";

export default {
  computed: {
    ...mapState("location", ["locations"]),
    ...mapGetters("location", ["getLocationById"]),
    location() {
      const locationId = this.$route.params.id;
      const location = this.getLocationById(Number(locationId));

    // Log the retrieved location to the console for debugging
    console.log("RETRIEVED LOCATION:", location);

    return location;
      // return this.getLocationById(Number(locationId));
    },
  },
};
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
  
