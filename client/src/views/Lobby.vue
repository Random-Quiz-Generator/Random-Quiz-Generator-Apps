<template>
    <div class="room d-flex">
      <b-container class="room-container d-flex flex-column align-items-center shadow">
        <h1 class="display-3 mt-3 color-white" v-if="!isPlaying">Welcome!</h1>
        <h1 class="display-3 mt-3 color-white" v-if="isPlaying">Good luck!</h1>
        <small class="color-white" v-if="!isPlaying">>Click start when everyone ready!</small>
        <b-row class="lobby m-3">
          <b-col cols="4 players-container p-2 d-flex flex-column">
           <h1 class="display-6 mt-3 player-title">Player joined: </h1>
           <small class="color-white">Minimum player: 2</small>
           <player v-for="(player, i) in players"
            :key="i"
            :name="players[i].name"
            :score="players[i].score"
          ></player>
           <div class="start-btn mb-4 mr-3 ml-3">
             <div class="d-flex" v-if="showCounter">
              <small class="color-white">starting in</small>
              <small class="ml-1">{{counter}}</small>
              <small class="ml-1">. . .</small>
             </div>
            <button @click.prevent="startGame" class="btn btn-danger start-now" v-if="showPlayBtn">START</button>
            <button @click.prevent="goback" class="btn btn-warning mt-2 start-now">Back to home</button>
            <small class="ml-1" v-if="isPlaying">Game is on progres..</small>
           </div>
          </b-col>
          <b-col cols="8 how-to p-2 d-flex">
            <quiz-board></quiz-board>
          </b-col>
        </b-row>
      </b-container>
    <cannot-join v-if="isPlaying" @click.prevent="goback"></cannot-join>
    <post-game v-if="isFinished" :result="result"></post-game>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Player from '../components/Player'
// import io from 'socket.io-client'
import CannotJoin from '../components/CannotJoin'
import PostGame from '../components/PostGame'
import QuizBoard from '../components/QuizBoard'
export default {
  name: 'Home',
  components: {
    Player,
    CannotJoin,
    PostGame,
    QuizBoard
  },
  data () {
    return {
      counter: 3,
      showCounter: false,
      player: {},
      socket: {},
      isFinished: false,
      result: false // win: true, lose: false
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
      this.socket.emit('start')
    },
    goback () {
      this.$router.push({ path: '/' })
    }
  },
  computed: {
    ...mapState([
      'players',
      'socket',
      'isPlaying',
      'question'
    ]),
    showPlayBtn () {
      let reveal = true
      if (this.players.length >= 2 && !this.isPlaying) reveal = true
      else reveal = false
      return reveal
    }
  },
  created: function () {
    this.$store.commit('START_CONNECTION')
    const playerName = localStorage.getItem('name')
    this.socket.emit('joined', {
      name: playerName,
      score: 0
    })

    this.socket.on('updatePlayer', (players) => {
      this.$store.commit('UPDATE_PLAYERS', players)
    })

    this.socket.on('updatePlaying', playing => {
      console.log(this.isPlaying, playing)
      this.$store.commit('SET_PLAYING', playing)
      console.log(this.isPlaying)
    })

    this.socket.on('getQuestion', question => {
      this.$store.commit('SET_QUESTION', question[0])
    })
  },
  destroyed: function () {
    this.$store.commit('END_CONNECTION')
  }
}
</script>

<style>
  .room{
    background-image: url('../assets/cool-background.png');
    background-size: cover;
  }
  .room-container {
    background-color: rgb(45, 59, 26);
    height: 100vh;
  }
  .players-container {
    border-right: 1px solid rgb(241, 241, 241);
  }
  .lobby{
    height: 100vh;
    border: 1px solid rgb(241, 241, 241);
    width: 100%;
    border-radius: 20px;
  }
  .player-title {
    font-size: 30px;
    font-weight: bold;
    color: rgb(241, 241, 241);

  }
  .start-btn{
    margin-top: auto;
  }
  .start-now{
    width: 100%;
  }
  .color-white {
    color: rgb(241, 241, 241);
  }
</style>
