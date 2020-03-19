<template>
    <b-row class="p-2 mr-3 ml-3 mt-2 player">{{name}}</b-row>
</template>

<script>
export default {
  name: 'Player',
  props: {
    name: String
  }
}
</script>

<style>
  .player {
    border: 1px solid rgb(219, 219, 219);
    border-radius: 20px;
  }
</style>
