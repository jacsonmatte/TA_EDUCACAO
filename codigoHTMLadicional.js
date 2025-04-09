<script>
    document.addEventListener("DOMContentLoaded", function() {

        let item = document.querySelector('[data-key="myhome"]');
        if (item) {
           // item.remove();
        }
    });

document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll('.w-100').forEach(function(div) {
        if (div.querySelector('.page-header-image')) {
            div.style.border = '1px solid #1c4c9a';
        } else {
        div.style.border = 'none';
    }
    });

    let loginForm = document.querySelector(".login-form-area");
    if (loginForm) {
        let continueButton = loginForm.querySelector(".continuebutton");
        if (continueButton) {
            continueButton.style.display = "none";
        }
    }
});
</script>

