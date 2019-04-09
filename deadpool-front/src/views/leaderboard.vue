<template>
    <div class='fullPage'>
        <h1>House Hodor</h1>
        <div class='board'>
            <ul class="list-group">
                <li class="list-group-item">Player</li>
                <li class="list-group-item">Zeke</li>
                <li class="list-group-item">Michael</li>
                <li class="list-group-item"> Diane</li>
                <li class="list-group-item">Aimee</li>
                <li class="list-group-item">Barr</li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item">Total Points</li>
                <li class="list-group-item">22</li>
                <li class="list-group-item">16</li>
                <li class="list-group-item">10</li>
                <li class="list-group-item">9</li>
                <li class="list-group-item">6</li>
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
        font-weight: bold

    }
    .board {
        display: flex;
        flex-direction: row;
        font-family:'Cinzel Decorative', cursive;
        background-color: transparent;
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
</style>
