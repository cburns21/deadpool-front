<template>
    <div class='fullPage'>
        <h1>{{this.league.name}}</h1>
        <div class='board'>
            <ul class="scoreboard">
                <h2 class='border-bottom'>Player</h2>
                <h2>Zeke</h2>
                <h2>Michael</h2>
                <h2> Diane</h2>
                <h2>Aimee</h2>
                <h2>Barr</h2>
            </ul>
            <ul class="scoreboard2">
                <h2 class='border-bottom'>Total Points</h2>
                <h2 class='points'>22</h2>
                <h2 class='points'>16</h2>
                <h2 class='points'>10</h2>
                <h2 class='points'>9</h2>
                <h2 class='points'>6</h2>
            </ul>
        </div>

    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    h1 {
        display: flex;
        font-family:'Cinzel Decorative', cursive;
        justify-content: center;
        padding-top: 25px;
        padding-bottom: 50px;;
        color: #595752;
        font-weight: bold;

    }
    .border-bottom {
        padding-bottom: 10px;
        border-width: 4px !important;
    }
    .board {
        display: flex;
        flex-direction: row;
        font-family:'Cinzel Decorative', cursive;
        align-items: flex-end;
    }
    h2 {
        color: white;
        font-size: 30pt;
        font-weight: bolder;
    }
    .fullPage {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-image: url(../assets/unsullied.png);
        background-size: cover; 
        height: 100vh;
        width: 100vw;
    }
    .points {
        padding-left: 70pt;
    }
</style>
