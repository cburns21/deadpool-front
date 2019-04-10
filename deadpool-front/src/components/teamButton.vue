<template>
    <router-link :to="{ path: 'leaderboard'}">
        <div class='myButton'>
            <button class="btn-lg">Enter Westeros</button> 
        </div>
    </router-link>   
</template>

<script>
export default {
    props: ['league']
}
</script>

<style scoped>
    .btn-lg {
    /* display: flex; */
    background-color: #88a0a8;
    align-items: center;
    border: #88a0a8;
    margin-top: 10px;
    }
    .myButton {
        display: flex;
        justify-content: center;
    }
</style>
