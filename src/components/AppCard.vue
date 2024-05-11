<script>
import { store } from "../store.js";
export default {
  props: {
    cardObj: Object,
  },
  data() {
    return { store, overlayOpen: false };
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
    toggleOverlay() {
      this.overlayOpen = !this.overlayOpen;
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
  <div class="card mb-4 flip-card-front" @click="toggleOverlay">
    <img
      class="backImag"
      :src="`https://image.tmdb.org/t/p/w342/${cardObj.poster_path}`"
      alt=""
    />
    <!-- Quando clicco cambia in display block -->
    <div class="card-overlay" :class="{ open: overlayOpen }">
      <!-- Potrei anche usare l'operatore ternario: cardObj.title ? cardObj.title : cardObj.name -->
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
      <!-- STARS -->
      <i
        class="fa-star"
        v-for="star in 5"
        :class="{
          fas: star <= Math.ceil(cardObj.vote_average / 2),
          far: star > Math.ceil(cardObj.vote_average / 2),
        }"
      ></i>
      <p class="text-center">
        Stelle: {{ Math.ceil(cardObj.vote_average / 2) }}
      </p>
      <p>{{ cardObj.overview }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 0;
  border-color: #7b7a7a;
}

.backImag {
  width: 100%;
  height: 360px;
  object-fit: cover;
}

.card-overlay {
  img {
    width: 15%;
    aspect-ratio: 1.5;
  }
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 0.8rem;
  padding: 10px 15px 10px 15px;
  display: none; /* La card-overlay è nascosta di default in Boostrap */
  overflow-y: auto;
}

//Gold Stars
.fa-star {
  color: gold;
}

/* Quando clicco cambia in display block */
.card-overlay.open {
  display: block;
}
</style>
