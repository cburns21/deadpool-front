<template>
    <div class="forms">
        <div class='header'>Create a Team</div>
        <form>
            <div class="name">
                <label for="validationCustom01">League Name</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="Team name" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="password">
                <label for="validationCustom02">League Password</label>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Team password" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class='addPlayers'>
                <label for="validationCustom03">Add Players</label>
                <div class="phones">
                    <input class="rounded" type="tel" size="3" maxlength="3" placeholder="555">- <input class="rounded" type="tel"  size="3" maxlength="3" placeholder="555"> -<input class="rounded" type="tel"  size="4" maxlength="4" placeholder="5555">
                    <button type="button" class="btn-sm">Add More Players</button>
                </div>
            </div>
            <div class="deadpool">
                <label for="validationCustom02">Set the Deadpool</label>
                <input type="integer" class="form-control" id="validationCustom02" placeholder="$$$" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
        </form>
        <button class="btn-lg" type="submit">Create League</button>
    </div>

</template>

<script>
export default {
    
}
</script>


<style scoped>
    .forms {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #88a0a8;
        height: 100vh;
        width: 100vw;
        font-family:'Cinzel Decorative', cursive;
        color: #595752;
    }
    .name, .password {
        display: flex;
        flex-direction: row;
    }
    button {
        align-self: center;
        background-color: #595752;
        border: #595752;
        margin-top: 3%;
        color: #c9a756;
    }
    .btn-sm {
        width: 200px;
        margin-left: 10pt;
    }
    .deadpool {
        display: flex;
        flex-direction: row;
    }
    .header {
        padding-bottom: 5%;
        font-size: 200%;
    }
    .addPlayers {
        display: flex;
        flex-direction: row;
        width: 5pt;
        padding-right: 10pt;
    }
    .phones {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 25pt;
        margin-bottom: 20pt;
    }
</style>
