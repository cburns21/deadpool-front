<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view :leagueBallots='leagueBallots' />
  </div>
</template>

<script>
export default {
  data() {
    return {
      leagueBallots: null,
    

    }
  },
  methods: {
    responses() {
      fetch('http://localhost:3000/leagues/HouseHodor')
      .then(resp => resp.json())
      .then(resp => {
      console.log(resp)
      this.leagueBallots = resp})
    },
  
  },
  mounted() {
    this.responses()
  }
}
</script>


<style scoped>

</style>
