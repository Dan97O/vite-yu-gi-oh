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
    <div class="container">
      <div class="row">
        <!--   
                <div class="search">
                  <select name="" id="">
                    <option value=""></option>
                  </select>
                </div>
           -->
        <div class="col-12">
          <CardList />

        </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped></style>