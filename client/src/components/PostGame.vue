<template>
  <div class="you-lose d-flex flex-column justify-content-center align-items-center" :style="{ 'background-color': resultColor() }">
      <h2 style="color:white">{{ resultText() }}</h2>
    <button @click.prevent="goback" class="btn btn-warning mt-2">Back to home</button>
  </div>
</template>

<script>
export default {
  name: 'YouLose',
  methods: {
    goback () {
      this.$router.push({ path: '/' })
    },
    resultText () {
      if (this.result) {
        return 'You Win'
      } else {
        return 'You Lose'
      }
    },
    resultColor () {
      if (!this.result) {
        return 'rgba(143, 6, 6, 0.747)'
      } else {
        return 'rgba(6, 143, 6, 0.747)'
      }
    }
  },
  props: {
    result: Boolean
  }
}
</script>

<style>
.you-lose{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 10;
}
</style>
