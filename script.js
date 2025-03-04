document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("form-response").style.display = "block";
        this.reset();
    });
});
