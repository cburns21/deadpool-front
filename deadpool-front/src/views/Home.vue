<template>
  <div class="homepage">
    <div class="header">
      <img alt="Vue logo" class="img-responsive" src="../assets/ironThrone.png">
      <HelloWorld msg="The Game of Thrones Deadpool"/>
    </div>
    <div class="buttons">
      <button type="button" class="btn-lg">Create a Team</button>
      <button type="button" class="btn-lg">Find Your Team</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .img-responsive {
    display: flex;
    max-height: 125px;
    max-width: 150px;
    float: left;
  }
  .header {
    display: flex;
    flex-grow: 2;
    text-shadow: 5px 5px black;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 3;

  }
  .btn-lg {
    background-color: #6D2828;
    margin-bottom: 20px;
    align-items: center;
    align-content: center;
    width: 600px;
    border: black;
    box-shadow: 5px 5px;
  }
  .homepage {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: #595752; 
    /* justify-content: center; */
  }
</style>
