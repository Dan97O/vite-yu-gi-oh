<script>
import { store } from "../store.js";
import CardList from "./CardList.vue";
import SelectFilter from "./SelectFilter.vue";

export default {
  name: "SiteMain",
  components: {
    CardList,
    SelectFilter
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.store.fetchArchetypes(this.store.deckUrlArchetype);
  },
}
</script>


<template>
  <main>
    <SelectFilter />
    <div class="container py-3">
      <div class="row">
        <div class="col-12 d-flex flex-wrap gap-4 justify-content-center">
          <CardList />
        </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main {
  background-color: orange;

  .container {
    background-color: white;
    border-radius: 10px;
  }
}
</style>