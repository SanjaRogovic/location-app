<template>
    <form class="pico-form" @submit.prevent="searchLocation">
        <input v-model="location" type="text" placeholder="Enter location" class="pico-input" />
        <button type="submit" :disabled="!location" class="pico-button pico-button--primary">Search</button>
    </form>
</template>
  
<script>
export default {
    data() {
        return {
            location: "",
        }
    },
    methods: {
        searchLocation() {
            this.$store.dispatch('location/fetchLocations', this.location)
            this.$emit("search", this.location)
        }
    }
}
</script>

<style scoped>
.pico-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.pico-button--primary {
    background-color: #4CAF50;
    color: white;
}

.pico-button:hover {
    background-color: #3e8e41;
}

.pico-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.pico-form {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.pico-input {
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 0.5rem;
}
</style>