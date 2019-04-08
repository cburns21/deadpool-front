<template>
     <router-link :to="{ path: 'teams' }">
        <div class="myButton">
            <button  type="button" class="btn-lg">Find Your Team</button>
        </div>
    </router-link>
    <!-- <router-link to="/teams">
    Teams</router-link> -->
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .btn-lg {
        background-color: #6D2828;
        margin-bottom: 20px;
        align-items: center;
        justify-content: center;
        width: 50%;
        border: black;
        box-shadow: 5px 5px black;
        color: white;
    }
    .myButton {
        display: flex;
        justify-content: center;
        
    }
</style>
