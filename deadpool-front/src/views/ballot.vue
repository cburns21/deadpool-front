<template>
    <div class='wholeBallot'>
        <div class='topBallot'>
            <h1>The Ballot</h1>
            <div class='yourName'>
                <label class='name' for="validationCustom01">Your name</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="Name" required>
            </div>
        </div>
        <!-- <div class="card-list">
            <individualCard v-for='characters in characters'
        v-bind:key="'characters' + characters.id"
        v-bind:characters='characters'/>
            
        </div> -->
        <div class='cards'>
           <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/jonSnow.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Jon Snow</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    <li class="list-group-item">In which episode do I die?
                        <!-- <div class="dropdown">
                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span id="selected">Chose option</span><span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Episode 1</a></li>
                            <li><a href="#">Episode 2</a></li>
                            <li><a href="#">Episode 3</a></li>
                            <li><a href="#">Episode 4</a></li>
                        </ul>
                        </div> -->
                    </li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/Sansa.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Sansa Stark</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/arya.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Arya Stark</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/bran.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Bran Stark</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/tormund.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Tormund Giantsbane</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/beric.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Beric Dondarrion</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div><div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/dani.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Daenarys Targaryen</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div><div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/jorah.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Jorah Mormont</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div><div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/miss.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Missandei</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div><div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/grey.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Grey Worm</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div><div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/brienne.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Brienne of Tarth</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div><div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/pod.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Podrick Payne</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/tyrion.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Tyrion Lannister</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/cers.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Cersei Lannister</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/jamie.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Jamie Lannister</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/yara.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Yara Greyjoy</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/theon.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Theon Greyjoy</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/bronn.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Bronn</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/sandor.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Sandor Clegane</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/davos.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Davos Seaworth</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/varys.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Varys</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/samwell.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Samwell Tarly</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/gregor.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Gregor Clegane</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/gendry.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Gendry</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">Do I die?<button>YES</button>
                    <button>NO</button></li>
                    
                    <li class="list-group-item">In which episode do I die?</li>
                    <li class="list-group-item">Am I revived as a White Walker?<button>Yes</button><button>No</button></li>
                </ul>
            </div>
        </div>
        <button class='btn-lg'>Submit</button>
    </div>
</template>

<script>
import individualCard from '../components/individualCard.vue'
export default {
  components: {
    individualCard
    },
 props: ['characters']
} 
// ('.dropdown-menu a').click(function(){
//     $('#selected').text($(this).text());
//   });
</script>

<style scoped>
    h1 {
        display:flex;
        justify-content: center;
    }
    .yourName {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        /* width: 50%; */
    }
    button {
        background-color: #595752;
    }
   .cards {
       display: flex;
       flex-wrap: wrap;
       flex-direction: row;
       justify-content: center;
   } 
   .card {
       background-color: #88a0a8;
   }
   .wholeBallot {
       background-color: #595752;
        display: flex;
        justify-content: center;
        flex-direction: column;
   }
   img {
       width: 100%;
       height: 425px;
   }
   li {
       background-color: #88a0a8;
   }
   .btn-lg {
       display: flex;
       justify-content: center;
       background-color: #6d2828;
   }
</style>
