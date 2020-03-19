<template>
  <div class="cannot-join d-flex flex-column justify-content-center align-items-center">
      Game is no progress! Click to go back.
    <button @click.prevent="goback" class="btn btn-warning mt-2">Back to home</button>
  </div>
</template>

<script>
export default {
  name: 'CannotJoin',
  methods: {
    goback () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
.cannot-join{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    background-color: rgb(255,255,255, 0.8);
    z-index: 10;
}
</style>
