<template>
  <div class="team">
    <h1>props.teamName</h1>
    <div class="password">
      <h3>Enter Team Password:</h3>
      <input type="text">
    </div>
    <button class="btn-lg">Enter Westeros</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  padding-top: 25%;
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
h3 {
  padding-right: 2%;
}
.btn-lg {
  /* display: flex; */
  background-color: #88a0a8;
  /* align-self: center; */
}
</style>
