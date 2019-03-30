<template>
  <div class="homepage">
      <div class="header">
        <!-- <img alt="Vue logo" class="img-responsive" src="../assets/ironThrone.png"> -->
        <HelloWorld msg="The Game of Thrones Deadpool"/>
      </div>
      <!-- <div class="buttons">
        <!-- <button type="button" class="btn-lg">Create a Team</button> -->
        <!-- <button type="button" class="btn-lg">Find Your Team</button>
      </div> --> 
      <div id="audio" class="player-wrapper">
        <audio autoplay="autoplay">
        <source src="../assets/song.mp3"
        type="audio/mpeg"></audio>
      </div>
      <createLeague/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import createLeague from '../components/createLeague.vue'
import findTeam from '../components/findTeam.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    createLeague,
    findTeam
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
    padding-bottom: 20%;
    text-shadow: 5px 5px #88a0a8;
    justify-content: center;
    -webkit-animation: scale-up-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  }
@-webkit-keyframes scale-up-top {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
}
@keyframes scale-up-top {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
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
    background-image: url(../assets/wall.png);
    background-size: cover; 
    font-family:'Cinzel Decorative', cursive;;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    /* justify-content: center; */
  }
 

</style>


