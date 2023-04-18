<script>
import { store } from "./../store";

export default {
  name: "SelectFilter",
  data() {
    return {
      store,
      archetype: "",
    };
  },
  computed: {
    listFilter() {
      return store.cards.filter((card) => card.archetype == this.archetype);
    },
  },
}
</script>


<template>
  <div class="my_container">
    <div class="search">
      <select name="" id="" v-model="archetype">
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