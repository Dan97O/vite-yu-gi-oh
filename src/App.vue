<script>
import { state } from "./state"
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'

export default {
  components: {
    SiteHeader,
    SiteMain,
  },
  data() {
    return {
      state,
    }
  },
  created() {
    state.fetchCards(state.deckUrl);
  }

}
</script>

<template>
  <SiteHeader />
  <SiteMain />
</template>

<style></style>
