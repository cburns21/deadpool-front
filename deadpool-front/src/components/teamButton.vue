<template>
    <router-link class="link" v-bind:to="{name:'Your Team', params:{leagueName: this.leagueName}}" >
        <button  class="btn-lg">Enter Westeros</button>
    </router-link>
</template>

<script>
export default {
    props: ['league']
}
</script>

<style>
    button {
        color: #595752;
        background-color: #88a0a8;
        border: #88a0a8;
    }
</style>
