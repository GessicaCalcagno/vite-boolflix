<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
      //Solo nel caso volessi usare un loader
      isLoading: false,
    };
  },
  methods: {
    getSearchMovie() {
      this.isLoading = true;
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: this.store.api_key,
            query: this.store.searchQuery,
          },
        })
        .then((resp) => {
          console.log(resp);
          (this.store.arrayMovie = resp.data.results),
            console.log(resp.data.results);
          console.log(resp.data.results[0].title);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    getSearchSeries() {
      axios
        .get("https://api.themoviedb.org/3/search/tv?", {
          params: {
            api_key: this.store.api_key,
            query: this.store.searchQuery,
          },
        })
        .then((resp) => {
          console.log(resp);
          (this.store.arraySerie = resp.data.results),
            console.log(resp.data.results);
          console.log(resp.data.results[0].name);
        });
    },
  },
};
</script>

<template>
  <AppHeader
    @search="[getSearchMovie(), getSearchSeries()]"
    @keyup.enter="[getSearchMovie(), getSearchSeries()]"
  />
  <AppMain />
</template>

<style lang="scss"></style>
