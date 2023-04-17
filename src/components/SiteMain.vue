<script>
import CardList from "./CardList.vue";
export default {
  name: "SiteMain",
  components: {
    CardList
  },
}
</script>


<template>
  <main>
    <div class="my_container">
      <div class="search">
        <select name="" id="">
          <option value="">Alien</option>
        </select>
      </div>
    </div>

    <div class="container">
      <div class="row">



        <div class="col-12 d-flex flex-wrap gap-4 justify-content-center">
          <CardList />

        </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
.my_container {
  max-width: 1140px;
  margin: auto;
  margin-bottom: 3rem;
}
</style>