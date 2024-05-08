<script>
import { store } from "../store";
import CardList from "./CardList.vue";

export default {
  components: {
    CardList,
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
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div class="col" v-for="card in store.arrayMovie">
          <CardList :cardObj="card" />
        </div>
      </div>
    </div>
  </template>

<style scoped lang="scss">
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;

</style>