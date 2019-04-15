<template>
    <div class="forms">
        <div class='header'>Create a Team</div>
        <form>
            <div class="name">
                <label for="validationCustom01">League Name</label>
                <input v-model="name" type="text" class="form-control" id="validationCustom01" placeholder="Team name" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="password">
                <label for="validationCustom02">League Password</label>
                <input v-model="password" type="text" class="form-control" id="validationCustom02" placeholder="Team password" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class='question'>
                <label for="validationCustom03">How Many players would you like to invite?</label>
                 <select class="form-control" >
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                    <option value="9">Nine</option>
                    <option value="10">Ten</option>
                </select> 
            </div>
            <div class="phones">
                <input class="rounded" type="tel" size="3" maxlength="3" placeholder="555">- <input class="rounded" type="tel"  size="3" maxlength="3" placeholder="555"> -<input class="rounded" type="tel"  size="4" maxlength="4" placeholder="5555">       
            </div>
            <div class="deadpool">
                <label for="validationCustom04">Set the Deadpool</label>
                <input type="integer" class="form-control" id="validationCustom02" placeholder="$$$" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
        </form>
        <button v-on:click="postLeague" class="btn-lg" type="submit">Create League</button>
    </div>

</template>

<script>
// import VueResource from 'vue-resource'
// import Vue from 'vue'
// Vue.use(VueResource)
export default {
  methods: {
    postLeague() {
      fetch('http://localhost:3000/leagues', {
        method: 'POST',
        body: JSON.stringify({
          name: this.name,
          password: this.password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(response => console.log('Success:', JSON.stringify(response))).catch(error => console.error('Error:', error))
    }

  },
  data () {
      return {
          name: '',
          password: ''
      }
  },
//   methods: {
//       onChange(event) {
//           console.log(event.target.value)
//       }
//   }
  
  
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
    .question {
        display: flex;
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
        flex-direction: column;
        width: 5pt;
        padding-right: 10pt;
    }
    .phones {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: 25pt;
        margin-bottom: 20pt;
        border: white;
    }
   
</style>
