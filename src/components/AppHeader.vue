<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center">
        <h1>BOOLFLIX</h1>

        <ul class="d-flex">
          <li class="me-4"><a href="#">Home</a></li>
          <li class="me-4"><a href="#">Film</a></li>
          <li class="me-4"><a href="#">Serie TV</a></li>
          <li class="me-4"><a href="#">Anime</a></li>
        </ul>
      </div>
      <div class="d-flex justify-content-end align-items-center">
        <input
          type="text"
          v-model="store.searchQuery"
          aria-label="Inizia la ricerca"
          placeholder="Cerca"
          class="form-control me-1"
        />
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="$emit('search')"
        >
          Cerca
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  min-height: 80px;
  padding: 10px;
  h1 {
    color: red;
    font-style: italic;
  }
  .form-control {
    width: 50%;
    &:focus {
      border-color: red;
      box-shadow: red;
    }
  }

  ul {
    margin: 0;
    li {
      font-size: 1.3rem;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>
