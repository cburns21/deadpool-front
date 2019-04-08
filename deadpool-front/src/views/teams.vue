<template>
  <div class="team">
    <h1>Team Log In</h1>
    <div class='form-group'>
    <div class="name">
      <h3>Pick Your League</h3>
      <div class="form-group">
        <select class="form-control">
         <option>League Name</option>
         <option>HouseHodor</option>
         <option>Dragons</option>
         </select>
      </div>
    </div>
    <div class="password">
      <h3>Enter League Password</h3>
      <input class="form-control" type="text" placeholder="Team Password">
    </div>
    </div>
    <button class="btn-lg">Enter Westeros</button>
  </div>
</template>

<script>
export default {
   // props: ['leagues']
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
}
.name {
   display: flex;
   justify-content: center;
   padding: 5%;
   color: #f7f9f9;
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
