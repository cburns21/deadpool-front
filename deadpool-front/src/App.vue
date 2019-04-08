<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      responses: null,
      players: null,
      leagues: null,
      characters: null 

    }
  },
  methods: {
    getResponses() {
      fetch('http://localhost:3000/responses')
      .then(resp => resp.json())
      .then(resp => this.responses = resp)
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
    this.responses()
    this.players()
    this.leagues()
    this.characters()
  }
}
</script>


<style scoped>

</style>
