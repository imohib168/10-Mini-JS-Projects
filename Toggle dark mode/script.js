const toggle = document.getElementById("toggle");

toggle.addEventListener("click", (event) => {
    document.body.classList.toggle("dark", event.target.checked)
})