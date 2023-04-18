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
  <div class="card" v-for="card in store.cardList">
    <img class="card-img-top" :src="card.card_images[0].image_url">
    <div class="card-body p-0">
      <h6 class="m-0">{{ card.name }}</h6>
      <span>{{ card.archetype }}</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 200px;
  width: 150px;
  margin-bottom: 5rem;



  .card-body {
    background-color: rgba(0, 0, 0, 0.644);
    text-align: center;
    min-height: 70px;
    border-radius: 0 0 7px 7px;

    h6 {
      font-size: 14px;
      color: rgb(0, 0, 0);
      padding-top: 5px;
    }

    span {
      font-size: 12px;
      color: white;
      font-weight: 600;
    }
  }

}
</style>