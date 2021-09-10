const colors = ["#d35400", '#8e44ad', '#3498db', '#f1c40f', '#c0392b', '#2c3e50'];

const button = document.getElementById('color-btn', );

button.addEventListener('click', getRandomColor)

function getRandomColor(event) {
    let number = Math.floor(Math.random() * 6);

    document.body.style.backgroundColor = colors[number]
}