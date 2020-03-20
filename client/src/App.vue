<template>
  <div id="app">
    <audio src="./assets/Warped.ogg" loop autoplay preload="auto"/>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

small {
  font-family: 'Bellota Text', cursive;
}

button {
  font-family: 'Bellota Text', cursive !important;
}
</style>
