<template>
    <div class="forms">
        <form class="needs-validation" novalidate>
            <div class="form-row">
                <div class="name">
                <label for="validationCustom01">Team Name</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="Team name" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                </div>
                <div class="password">
                <label for="validationCustom02">Team Password</label>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Team password" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <label for="validationCustom02">Confirm Password</label>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Team password" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                </div>
                
            </div>
        <button class="btn-sm" type="submit">Submit form</button>
        </form>
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
    .form-row {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    /* .forms {
        display: flex;
        align-items: center;
        align-content: center;
    } */
</style>
