

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "Brrr🥶";
});

myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "kinda cold nah?😰";
});

myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "pink";
    myBox.textContent = "Click Me😃";
});

