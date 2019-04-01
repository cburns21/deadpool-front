<template>
       <router-link v-bind="'teamLogIn'">
        <div class="myButton">
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            </div>
            </div>
        </div> 
        </router-link>
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
