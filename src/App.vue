<script>
import { store } from './store'
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'



export default {
  components: {
    SiteHeader,
    SiteMain,

  },
  data() {
    return {
      store
    }
  },
  created() {
    store.fetchCards(store.deckUrl);
  }

}
</script>

<template>
  <SiteHeader />
  <SiteMain />
</template>

<style></style>
