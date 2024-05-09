import { reactive } from "vue";

export const store = reactive({
  arrayMovie: [],
  arraySerie: [],
  searchQuery: "", //da collegare all'input con v-model
  api_key: "c6a9e7da50b2ce00f3b180bc2d8d44e9",
});

// prefisso immagine: "https://image.tmdb.org/t/p/w342"

// poster_path:"/b4wZkB4FNUi7SK46Tw9kxT5oW8M.jpg"
