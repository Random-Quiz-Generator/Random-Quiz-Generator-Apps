<template>
  <div class="home d-flex">
    <b-container class="home-container d-flex flex-column align-items-center">
      <h1 class="display-3 mt-5 pt-5">Welcome to</h1>
      <h1 class="display-3 bounce infinite animated">Random Quiz</h1>
      <small>Some are funny. Some are mindblowing.</small>
      <b-form class="pt-5 mt-4 d-flex flex-column align-items-start" @submit.prevent="joinGame">
        <b-form-group>
          <b-form-input
            v-model= "name"
            type="text"
            required
            class="form-input"
          ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="join" >Join the fun now</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      name: ''
    }
  },
  computed: {
    socket () {
      return this.$store.state.socket
    }
  },
  methods: {
    joinGame () {
      localStorage.setItem('name', this.name)
      this.$router.push({ path: '/lobby' })
    }
  },
  mounted () {
    localStorage.clear()
  }
}
</script>

<style>
  .home{
    background-color: rgb(245, 243, 243);
  }
  .home-container {
    background-image: url('../assets/bg.jpg');
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .form-input {
    width: 29.5rem !important;
    margin-top: 10rem;
  }
  .join {
    background-color: rgb(8, 77, 25) !important;
    border: 0 !important;
  }
</style>
