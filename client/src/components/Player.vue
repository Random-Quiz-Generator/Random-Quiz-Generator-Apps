<template>
    <b-row class="p-2 mr-3 ml-3 mt-2 player">
      <b-col cols="10" class="color-white">{{name}}</b-col>
      <b-col cols="2" class="color-white">{{score}}</b-col>
    </b-row>
</template>

<script>
export default {
  name: 'Player',
  props: {
    name: String,
    score: Number
  }
}
</script>

<style>
  .player {
    border: 1px solid rgb(219, 219, 219);
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
  }
</style>
