<script>
export default {
  props: {
    cardObj: Object,
  },
};
</script>

<template>
  <div class="card mb-3">
    <!-- <img class="" :src="cardObj.image" alt="" /> -->
    <div class="card-body">
        <h3 class="text-center m-0">{{ cardObj.title }}</h3>
        <h6 class="text-center">{{ cardObj.original_title }}</h6>
      <p class="text-center m-0">{{ cardObj.original_language }}</p>
      <p class="text-center">{{ cardObj.vote_average
 }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>