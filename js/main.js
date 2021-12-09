const main = document.getElementById("main");
const msgBox = document.querySelector(".message-txt");

const msgForm = document.querySelector(".message-form");
msgForm.addEventListener("submit", (e) => {
    e.preventDefault();
    msgBox.innerHTML = document.getElementById("message__input").value;
});
