<script>
import { store } from "../store.js";
export default {
  props: {
    cardObj: Object,
  },
  data() {
    return { store };
  },
  methods: {
    showFlag(curFlag) {
      let imgCur = "";
      switch (curFlag) {
        case "en":
          imgCur =
            "../src/assets/img/Flag_of_the_United_Kingdom_(3-5).svg.webp";
          break;
        case "it":
          imgCur = "../src/assets/img/Flag_of_Italy.svg.webp";
          break;
        case "ja":
          imgCur = "../src/assets/img/Flag_of_Japan.svg.png";
          break;
        case "us":
          imgCur = "../src/assets/img/Flag_of_the_United_States.svg.png";
          break;
        default:
          return "No Flag";
      }
      return imgCur;
    },

    getImageUrl(name) {
      return new URL(`../src/assets/${name}.png`, import.meta.url).href;
    },
  },
};

//VA BENE ANCHE QUESTO METODO: e poi nella img invoco semplicemente la funzione showFlag()
// showFlag() {
//   return (
//     "https://flagcdn.com/16x12/" + this.cardObj.original_language + ".png"
//   );
// },
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <h3 class="text-center m-0" v-if="cardObj.title">{{ cardObj.title }}</h3>
      <h3 class="text-center m-0" v-else>{{ cardObj.name }}</h3>
      <h6 class="text-center">{{ cardObj.original_title }}</h6>
      <!-- FLAG -->
      <img
        :src="showFlag(cardObj.original_language)"
        alt=""
        v-if="showFlag(cardObj.original_language) != 'No Flag'"
      />
      <p v-else>No Flag</p>
      <p class="text-center m-0">{{ cardObj.original_language }}</p>
      <p class="text-center">{{ cardObj.vote_average }}</p>
      <p class="">{{ cardObj.overview }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 15%;
  aspect-ratio: 1.5;
}
</style>
