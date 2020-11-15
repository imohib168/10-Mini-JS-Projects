const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
})

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("notification")

    notif.innerText = "This a random Text to Create a Notification";

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 5000)
}