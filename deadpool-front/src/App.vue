<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view :ballotResponses='ballotResponses' :players='players' :leagues='leagues' :characters='characters' />
  </div>
</template>

<script>
export default {
  data() {
    return {
      ballotResponses: null,
      players: null,
      leagues: null,
      characters: null 

    }
  },
  methods: {
    getResponses() {
      fetch('http://localhost:3000/responses')
      .then(resp => resp.json())
      .then(resp => this.ballotResponses = resp)
    },
    getPlayers() {
      fetch('http://localhost:3000/players')
      .then(resp => resp.json())
      .then(resp => this.players = resp)
    },
    getLeagues() {
      fetch('http://localhost:3000/leagues')
      .then(resp => resp.json())
      .then(resp => this.leagues = resp)
    },
    getCharacters() {
      fetch('http://localhost:3000/characters')
      .then(resp => resp.json())
      .then(resp => this.characters = resp)
    }
  },
  mounted() {
    this.ballotResponses()
    this.players()
    this.leagues()
    this.characters()
  }
}
</script>


<style scoped>

</style>
