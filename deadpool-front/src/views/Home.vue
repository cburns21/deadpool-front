<template>
  <div class="homepage">
      <div class="header">
        <img src="../assets/GoT.png" alt="">
      </div>
      <div class='subheader'>
        <strong>A Fantasy League</strong>
      </div>
      <div id="audio" class="player-wrapper">
        <audio autoplay="autoplay">
        <source src="../assets/song.mp3"
        type="audio/mpeg"></audio>
      </div>
      <createLeague/>
      <findYourTeam/>
  </div>
</template>

<script>
import createLeague from '../components/createLeague.vue'
import findYourTeam from '../components/findYourTeam.vue'
export default {
  name: 'home',
  components: {
    createLeague,
    findYourTeam
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
  .subheader {
    font-weight: 900;
    font-size: 30pt;
    margin-bottom: 5%;
  }
  .header {
    display: flex;
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


