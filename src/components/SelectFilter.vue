<script>
import { store } from "./../store";

export default {
  name: "SelectFilter",
  data() {
    return {
      store,
    };
  },
  /* computed: {
    listFilter() {
      return store.fetchCards(store.deckUrl);
    },
  }, */
}
</script>


<template>
  <div class="my_container">
    <div class="search">
      <select v-model="store.searchSelect" @change="store.fetchCards(store.deckUrl)">
        <option value="">Seleziona</option>
        <option v-for="archetype in store.archetypes" :value="archetype.archetype_name"> {{ archetype.archetype_name }}
        </option>
      </select>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.my_container {
  max-width: 1140px;
  margin: auto;
  margin-bottom: 2rem;
  padding-top: 1rem;
}
</style>