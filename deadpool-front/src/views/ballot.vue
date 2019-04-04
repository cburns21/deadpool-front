<template>
    <div class='wholeBallot'>
        <div class='topBallot'>
            <h1>The Ballot</h1>
            <div class='yourName'>
                <label class='name' for="validationCustom01">Your name</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="Name" required>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    h1 {
        display:flex;
        justify-content: center;
    }
    .yourName {
        display: flex;
        flex-direction: row;
        width: 50%;
    }
    .name {
        display: flex;
        flex-direction: column;
    }
</style>
