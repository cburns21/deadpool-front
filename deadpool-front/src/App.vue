<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view :leagueBallots='leagueBallots' :leaguePlayers='leaguePlayers' :leagues='leagues'/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leagueBallots: null,
      leaguePlayers: null,
      leagues: null 

    }
  },
  methods: {
    responses() {
      fetch('http://localhost:3000/leagues/HouseHodor')
      .then(resp => resp.json())
      .then(resp => {
      // console.log(resp)
      this.leagueBallots = resp})
    },
    getLeaguePlayers() {
      fetch('http://localhost:3000/players/HouseHodor')
      .then(resp => resp.json())
      .then(resp => {this.leaguePlayers = resp})
    },
    getLeagues() {
      fetch('http://localhost:3000/leagues')
      .then(resp => resp.json())
      .then(resp => {this.leagues = resp})
    }
  },
  mounted() {
    this.responses()
    this.getLeaguePlayers()
    this.getLeagues()
  }
}
</script>


