<template>
  <div class="pico-container">
    <h1 class="pico-heading--large">Search for a location</h1>
    <SearchForm :location="suggestedLocation" @search="searchLocations"/>
    <h3>Suggested Locations</h3>
    <ul class="pico-list">
      <li v-for="location in suggestedLocation" :key="location.id" class="pico-list__item">
        <nuxt-link to="/location-selection" class="pico-link" @click="selectSuggestedLocation(location)">{{ location.name }}</nuxt-link>
      </li>
    </ul>
    <hr size="1">
    <h3>Search Results</h3>
    <ul class="pico-list">
      <li v-for="location in locations" :key="location.id" class="pico-list__item">
        <nuxt-link :to="`/location/${location.id}`" class="pico-link" @click="showLocationDetails(location)">{{ location.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SearchForm from '~/components/SearchForm.vue'


export default {

  components: {
    SearchForm
  },

  data() {
    return {
      suggestedLocation: "",
    };
  },
  computed: {
    ...mapState("location", ["locations"]),
  },
  methods: {
    ...mapActions("location", ["fetchLocations"]),
    searchLocations(query) {
      this.fetchLocations(query);
    },
    selectSuggestedLocation(location) {
      this.$emit("search", location.name);
    },
    showLocationDetails(location) {
      this.$router.push(`/location/${location.id}`);
    },
  },

};

// export default {
//   components: {
//     SearchForm
//   },
//   computed: {
//     locations() {
//       return this.$store.getters.locations
//     }
//   },
//   methods: {
//     selectLocation(query) {
//       this.$store.dispatch('location/fetchLocations', query)
//     }
//   }
// }
</script>

<style scoped>
.pico-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.pico-heading--large {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.pico-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pico-list__item {
  margin-bottom: 0.5rem;
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
 
