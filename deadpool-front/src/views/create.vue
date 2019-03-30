<template>
    <div class="forms">
        <form novalidate>
            <div>
                <div class="name">
                    <label for="validationCustom01">League Name:</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Team name" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="password">
                    <label for="validationCustom02">League Password:</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Team password" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="confirmPass">
                    <label for="validationCustom02">Confirm Password:</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Team password" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
            </div>
        </form>
        <button class="btn-sm" type="submit">Create League</button>
    </div>

<!-- <script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>  -->
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
        background-color: #c9a75c;
        height: 100vh;
        width: 100vw;
    }
    .name, .password, .confirmPass {
        display: flex;
        flex-direction: row;
    }
    button {
        align-self: center;
        background-color: #88a0a8;
    }
</style>
