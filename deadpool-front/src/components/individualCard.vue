<template>
    <router-link :to="{ path: `Individual/${characters.id}`}">
        <div>
            <div class="card" id="cards" style="width: 18rem;">
                <h1>{{characters.name}}</h1>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
