import { reactive } from "vue";

export const store = reactive({
  arrayMovies:[],
  arraySerie:[],
  searchQuery:"", //da collegare all'input con v-model
  api_key: "c6a9e7da50b2ce00f3b180bc2d8d44e9"
});