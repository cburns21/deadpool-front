<template>
  <div class="team">
    <h1>Team Log In</h1>
    <div class="name">
      <h3>Pick Your League:</h3>
      <div class="form-group">
        <select class="form-control">
         <option>League Name</option>
         <option>HouseHodor</option>
         <option>Dragons</option>
         </select>
      </div>
    </div>
    <div class="password">
      <h3>Enter League Password:</h3>
      <input type="text">
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
}
.password {
  display: flex;
  justify-content: center;
  padding: 5%;
}
.name {
   display: flex;
   justify-content: center;
   padding: 5%;
}
h3 {
  padding-right: 2%;
}
.btn-lg {
  /* display: flex; */
  background-color: #88a0a8;
  align-self: center;
}
</style>
