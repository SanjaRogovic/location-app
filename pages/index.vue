<template>
  <div class="pico-container">
    <h1 class="pico-heading--large">Search for a location</h1>
    <SearchForm />
    <h3>Suggested Locations</h3>
    <ul class="pico-list">
      <li v-for="location in suggestedLocations" :key="location.id" class="pico-list__item">
        <nuxt-link :to="`/location/${location.id}`" class="pico-link" @click="selectSuggestedLocation(location)">{{ location.name }}</nuxt-link>
      </li>
    </ul>
    <hr size="1">
    <h3>Search Results</h3>
    <ul class="pico-list">
      <li v-for="location in locations" :key="location.osm_id" class="pico-list__item">
        <nuxt-link :to="`/location/${location.osm_id}`" class="pico-link" @click="showLocationDetails(location)">{{ location.display_name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import SearchForm from '~/components/SearchForm.vue';

export default {
  components: {
    SearchForm
  },
  data() {
    return {
      location: "",
    };
  },
  computed: {
    ...mapState("location", ["locations"]),
    ...mapGetters("location", ["suggestedLocations"]),
  },
  created() {
    this.fetchSuggestedLocations(); // fetch suggested locations on component mount
  },
  methods: {
    ...mapActions("location", ["fetchLocations", "fetchSuggestedLocations"]),
    searchLocations(query) {
      this.fetchLocations(query);
    },
    selectSuggestedLocation(location) {
      if (location && location.name) {
        // Populate the search input with the name of the selected location
        this.$emit("update:location", location.name);
        // Trigger fetchLocations with the suggested location name
        this.fetchLocations(location.name);
        // Emit an event 
        this.$emit("search", location.name);
      } else {
        console.error("Invalid suggested location:", location);
        // Handle the error or log it as needed
      }
    },
    showLocationDetails(location) {
      this.$router.push(`/location/${location.osm_id}`);
    },
  }
};
</script>

<style scoped>
.pico-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.pico-heading--large {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.pico-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pico-list__item {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.pico-link {
  text-decoration: none;
  color: #0066cc;
  display: block;
}

.pico-link:hover {
  text-decoration: underline;
  color: blueviolet;
}
</style> 
 
