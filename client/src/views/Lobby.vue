<template>
    <div class="room d-flex">
      <b-container class="room-container d-flex flex-column align-items-center shadow">
        <h1 class="display-3 mt-3">Welcome!</h1>
        <small>Click start when everyone ready!</small>
        <b-row class="lobby m-3">
          <b-col cols="4 players-container p-2">
           <h1 class="display-6 mt-3 player-title">Player joined: </h1>
           <small>Minimum player: 2</small>
           <player v-for="(player, i) in players" :key="i" :name="players[i]"></player>
          </b-col>
          <b-col cols="8 how-to p-2">howto</b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
// @ is an alias to /src
import Player from '../components/Player'
export default {
  name: 'Home',
  components: {
    Player
  },
  data () {
    return {
      players: [
        'Adam',
        'Ridza',
        'Haidar',
        'Yoko'
      ]
    }
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
</style>
