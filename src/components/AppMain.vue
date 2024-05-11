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
  <main>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <h2 class="p-3" style="width: 100%">FILM</h2>
        <div class="col" v-for="cardMovie in store.arrayMovie">
          <AppCard :cardObj="cardMovie" />
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <h2 class="p-3" style="width: 100%">SERIE TV</h2>
        <div class="col" v-for="cardTv in store.arraySerie">
          <AppCard :cardObj="cardTv" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;

main {
  height: 100vh;
  background-color: black;
  overflow-y: auto;
}

h2 {
  color: red;
  font-weight: bold;
}
</style>
