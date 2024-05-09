<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
      <h2 style="width: 100%">-> Film</h2>
      <div class="col" v-for="card in store.arrayMovie">
        <AppCard :cardObj="card" />
      </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
      <h2 style="width: 100%">-> Serie Tv</h2>
      <div class="col" v-for="cardTv in store.arraySerie">
        <AppCard :cardObj="cardTv" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;
</style>
