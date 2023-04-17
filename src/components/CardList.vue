<script>
import { store } from "./../store";
export default {
  name: "CardList",
  props: {
    card: Object,
  },
  data() {
    return {
      store
    }
  },

}
</script>
<template>
  <div class="card gap-3">
    <img :src="card.card_images[0].image_url" :title="card.name" v-for="card in store.cardList">

  </div>
</template>


<style lang="scss" scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 150px;

  img {
    height: 100%;
  }
}
</style>