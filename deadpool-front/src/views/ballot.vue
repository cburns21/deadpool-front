<template>
    <div class='wholeBallot'>
        <div class='topBallot'>
            <h1>The Ballot</h1>
            <div class='yourName'>
                <label class='name' for="validationCustom01">Your name</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="Name" required>
            </div>
        </div>
        <div class='cards'>
           <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?</li>
                </ul>
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
