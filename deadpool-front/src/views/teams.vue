<template>
  <div class="team">
    <h1>League Log In</h1>
    <div class='form-group'>
    <div class="name">
      <h3>Find Your League</h3>
      <div class="form-group">
        <select v-model="leagueName" class="form-control" id="exampleFormControlSelect1" >
         <leagueNames v-for='league in leagues' v-bind:key="'league' + league.id" v-bind:league='league'/>
       </select>
      </div>
    </div>
     <div class="password">
      <label for="validationServerUsername">Password</label>
      <div class="input-group">
        <input type="password" class="form-control is-invalid" id="validationServerUsername" placeholder="password" aria-describedby="inputGroupPrepend3" required>
        <div class="invalid-feedback">
          Please enter your league password.
        </div>
      </div>
    </div>
  </div>
    <teamButton />
  </div>
    

</template>

<script>
import leagueNames from '../components/leagueNames.vue'
import teamButton from '../components/teamButton.vue'
export default {
   components: {
     teamButton,
     leagueNames
   },
   props: ['leagues'],
  data () {
    return {
      button: 'this is the button',
      leagueName: ''
    }
  },
  computed: {
     league: function() {
      return this.leagues.filter(league => {
        let leagueName = +this.$route.params.id
        return leagueName === league.id
      })[0]
    },

  }
}

</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  padding-top: 2%;
  color: #88a0a8;
}
.team {
  display: flex;
  background-color: #595752;
  width: 100wh;
  height: 100vh;
  flex-direction: column;
  font-family:'Cinzel Decorative', cursive;
}
.password {
  display: flex;
  justify-content: center;
  padding-left: 20%;
  padding-right: 20%;
  color: #f7f9f9;
  
}
.name {
   display: flex;
   justify-content: center;
   padding: 5%;
   color: #f7f9f9;
   
}
label {
  padding-right: 2%;
  color: #f7f9f9;
  font-size: 25px;
}
h3 {
  padding-right: 2%;
  color: #f7f9f9;
}
.btn-lg {
  /* display: flex; */
  background-color: #88a0a8;
  align-self: center;
  border: #88a0a8;
}
.form-group {
   display: flex;
   flex-direction: column;
}
</style>
