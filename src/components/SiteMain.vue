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
    this.store.fetchCards(this.store.deckUrl);
    this.store.fetchArchetypes(this.store.deckUrlArchetype);
  },
}
</script>


<template>
  <main>
    <SelectFilter @select_filter="store.fetchCards(store.deckUrl)" />
    <div class="container pb-5">
      <div class="row">
        <div class="numCards">
          <span>
            Found {{ this.store.cards.data.length }} cards
          </span>
        </div>
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
  padding-bottom: 5rem;

  .container {
    background-color: white;
    border-radius: 10px;


    .numCards {
      padding: 1rem;
      background-color: rgba(0, 0, 0, 0.644);
      border-radius: 10px 10px 0 0;
      color: white;
      margin-bottom: 1rem;
    }
  }
}
</style>