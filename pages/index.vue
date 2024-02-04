<template>
  <div class="pico-container">
    <h1 class="pico-heading--large">Search for a location</h1>
    <SearchForm />
    <ul class="pico-list">
      <li v-for="location in locations" :key="location.place_id" class="pico-list__item">
        <nuxt-link to="/location" class="pico-link" @click="selectLocation(location)">{{ location.display_name }} ({{
          location.lat }}, {{ location.lon }})</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchForm from '~/components/SearchForm.vue'

export default {
  components: {
    SearchForm
  },
  computed: {
    locations() {
      return this.$store.getters.locations
    }
  },
  methods: {
    selectLocation(query) {
      this.$store.dispatch('location/fetchLocations', query)
    }
  }
}
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