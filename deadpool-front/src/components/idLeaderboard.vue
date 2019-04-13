<template>
        <h1>{{this.leagueName}}</h1>
</template>


<script>
export default {
    props: ['leagueName']
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
</style>
