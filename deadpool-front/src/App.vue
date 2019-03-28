<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family:'Cinzel Decorative', cursive;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #88a0a8;
  background-color: #595752
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #88a0a8;
}

#nav a.router-link-exact-active {
  color: #6d2828;
}
</style>
