<template>
    <div class="room d-flex">
      <b-container class="room-container d-flex flex-column align-items-center shadow">
        <h1 class="display-3 mt-3">Welcome!</h1>
        <small>Click start when everyone ready!</small>
        <b-row class="lobby m-3">
          <b-col cols="4 players-container p-2 d-flex flex-column">
           <h1 class="display-6 mt-3 player-title">Player joined: </h1>
           <small>Minimum player: 2</small>
           <player v-for="(player, i) in players" :key="i" :name="players[i]"></player>
           <div class="start-btn mb-4 mr-3 ml-3">
             <div class="d-flex" v-if="showCounter">
              <small>starting in</small>
              <small class="ml-1">{{counter}}</small>
              <small class="ml-1">. . .</small>
             </div>
            <button @click.prevent="countdown" class="btn btn-danger start-now" v-if="!isPlaying">START</button>
            <button @click.prevent="goback" class="btn btn-warning mt-2 start-now">Back to home</button>
            <small class="ml-1" v-if="isPlaying">Game is on progres..</small>
           </div>
          </b-col>
          <b-col cols="8 how-to p-2"></b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
// @ is an alias to /src
import Player from '../components/Player'
import io from 'socket.io-client'
export default {
  name: 'Home',
  components: {
    Player
  },
  data () {
    return {
      players: [],
      isPlaying: false,
      counter: 3,
      showCounter: false,
      socket: {}
    }
  },
  methods: {
    countdown () {
      this.showCounter = true
      const timer = setInterval(() => {
        if (this.counter === 1) {
          clearInterval(timer)
          this.showCounter = false
          this.isPlaying = true
          this.startGame()
        } else {
          this.counter--
        }
      }, 1000)
    },
    startGame () {
      console.log('start')
    },
    goback () {
      this.$router.push({ path: '/' })
    }
  },
  created: function () {
    this.socket = io('http://localhost:3000')
    const playerName = localStorage.getItem('name')
    this.socket.on('connect', () => {
      this.socket.emit('joined', playerName)
    })
    this.socket.on('updatePlayer', (playerNames) => {
      this.players = playerNames
    })
  },
  destroyed: function () {
    this.socket.emit('leave')
  }
}
</script>

<style>
  .room{
    background-color: rgb(245, 243, 243);
  }
  .room-container {
    background-color: rgb(255, 255, 255);
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .players-container {
    border-right: 1px solid rgb(219, 219, 219);
  }
  .lobby{
    height: 100vh;
    border: 1px solid rgb(219, 219, 219);
    width: 100%;
    border-radius: 20px;
  }
  .player-title {
    font-size: 30px;
    font-weight: bold;
  }
  .start-btn{
    margin-top: auto;
  }
  .start-now{
    width: 100%;
  }
</style>
