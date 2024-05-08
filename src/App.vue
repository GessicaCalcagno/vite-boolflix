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
    };
  },
  methods: {
    getSearch(){
      axios.get("https://api.themoviedb.org/3/search/movie",{
        params: {
            api_key: this.store.api_key,
            query: this.store.searchQuery,
        }
      }).then((resp) => {
          console.log(resp);
          this.store.arrayMovie = resp.data.results,
          console.log(resp.data.results);
          console.log(resp.data.results.title);
        });
    }
    
  },
};
</script>

<template>
  <AppHeader @search="getSearch"/>
  <AppMain />
</template>

<style lang="scss"></style>
